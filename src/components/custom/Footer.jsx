import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold text-white">AI-Powered Resume Builder</h2>
            <p className="mt-2 text-sm">
              Transform your career journey with our AI-driven tools, designed to create professional and impactful resumes in minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-blue-400 transition duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/features" className="hover:text-blue-400 transition duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-blue-400 transition duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold text-white">Follow Us</h2>
            <p className="mt-2 text-sm">Stay connected on our social platforms:</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="h-6 w-6 text-gray-300 hover:text-blue-500 transition duration-200" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="h-6 w-6 text-gray-300 hover:text-blue-400 transition duration-200" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="h-6 w-6 text-gray-300 hover:text-blue-600 transition duration-200" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="h-6 w-6 text-gray-300 hover:text-gray-400 transition duration-200" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} AI Resume Builder. All rights reserved.</p>
          <p className="text-xs mt-2">
            Designed with ❤️ by <a href="/team" className="hover:text-blue-400 transition">Your Team</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
