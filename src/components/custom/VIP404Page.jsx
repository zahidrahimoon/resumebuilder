import React from "react";
import { FaHome, FaRobot, FaGithub, FaLinkedin } from "react-icons/fa";

const VIP404Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Glowing 404 with Background */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 blur-3xl opacity-40"></div>
          <h1 className="relative text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse">
            404
          </h1>
        </div>

        {/* AI Resume Builder Section */}
        <h2 className="text-3xl font-bold text-white">
          AI Resume Builder
          <span className="block text-lg font-medium text-gray-300 mt-2">
            Effortlessly craft professional resumes using AI.
          </span>
        </h2>

        <p className="text-lg text-gray-400">
          Oops! The page you’re looking for doesn’t exist. Let’s get back to building something amazing.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <FaHome className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => (window.location.href = "https://github.com/zahidraimoon")}
            className="px-6 py-3 text-lg font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/zahidraimoon"
            className="text-gray-400 hover:text-blue-500 transition-all transform hover:scale-110"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/zahidraimoon"
            className="text-gray-400 hover:text-gray-900 transition-all transform hover:scale-110"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="mailto:zahidraimoon@gmail.com"
            className="text-gray-400 hover:text-yellow-500 transition-all transform hover:scale-110"
          >
            <FaRobot className="w-8 h-8" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Built with ❤️ using <span className="font-semibold text-white">React</span> &{" "}
            <span className="font-semibold text-white">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VIP404Page;
