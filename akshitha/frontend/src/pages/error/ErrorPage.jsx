import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#FFF3F2] text-[#CC3F23] px-4">
      <AlertTriangle className="w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong.</h1>
      <p className="text-lg text-[#7c3d2f] mb-6 text-center">
        The page you are looking for doesn’t exist or an error occurred.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 rounded-full bg-[#CC3F23] text-white hover:bg-[#b7381f] transition-all"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
