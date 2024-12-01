import React from "react";
import StepCard from "./StepCard";
import { AtomIcon, Edit, Share2 } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-8 z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className="font-bold text-3xl transition-transform duration-300 hover:scale-105">
          How it Works?
        </h2>
        <p className="text-md text-gray-500 transition-transform duration-300 hover:scale-105">
          Give mock interviews in just 3 simple steps
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <StepCard
            icon={AtomIcon}
            title="Write a Prompt for Your Form"
            description="Start by drafting your form's prompt. Clearly define the purpose and ensure it aligns with your interview goals."
            className="transition-transform duration-300 hover:scale-105"
          />
          <StepCard
            icon={Edit}
            title="Edit Your Form"
            description="Customize your form by adding or modifying questions to tailor it to the specific interview role or skill."
            className="transition-transform duration-300 hover:scale-105"
          />
          <StepCard
            icon={Share2}
            title="Share & Start Accepting Responses"
            description="Distribute your form link and begin collecting responses effortlessly. Track and review insights in real-time."
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/sign-in"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
