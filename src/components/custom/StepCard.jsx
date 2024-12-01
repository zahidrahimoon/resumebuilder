import React from "react";
import { AtomIcon, Edit, Share2 } from "lucide-react";

const StepCard = ({ icon: Icon, title, description }) => {
  return (
    <a
      className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      href="#"
    >
      <Icon className="h-8 w-8" />
      <h2 className="mt-4 text-xl font-bold text-black">{title}</h2>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </a>
  );
};

export default StepCard;
