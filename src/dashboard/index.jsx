import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "./../../service/GlobalApi";
import ResumeCardItem from "./components/ResumeCardItem";

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    if (user) {
      GetResumesList();
    }
  }, [user]);

  /**
   * Fetches the user's resume list.
   */
  const GetResumesList = () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) {
      console.warn("User email is undefined, skipping API call.");
      return;
    }
    console.log(`Fetching data from: /api/user-resumes?email=${email}`);
    GlobalApi.GetUserResumes(email)
      .then((resp) => {
        setResumeList(resp.data.data || []);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setResumeList([]); // Fallback for API failure
      });
  };
  

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start creating an AI resume for your next job role</p>
      <div
        className="grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10"
      >
        <AddResume />
        {Array.isArray(resumeList) && resumeList.length > 0 ? (
          resumeList.map((resume, index) => (
            <ResumeCardItem
              resume={resume}
              key={index}
              refreshData={GetResumesList}
            />
          ))
        ) : (
          [1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="h-[280px] rounded-lg bg-slate-200 animate-pulse"
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
