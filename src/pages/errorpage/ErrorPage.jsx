import React from "react";
import { useNavigate } from "react-router";
import { FiHome } from "react-icons/fi";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0f172a] flex items-center justify-center px-4">
      
      <div className="text-center text-white max-w-md">
        
        {/* Big 404 */}
        <h1 className="text-[120px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold mb-3">
          Oops! Page not found
        </h2>

        <p className="text-gray-400 mb-8">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 mx-auto px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg"
        >
          <FiHome />
          Back to Home
        </button>

        {/* decorative glow */}
        <div className="mt-10 w-40 h-40 bg-purple-500 blur-3xl opacity-20 mx-auto rounded-full"></div>
      </div>
    </div>
  );
};

export default ErrorPage;