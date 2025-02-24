import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Navigation ke liye useNavigate hook

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-gradient-to-br from-blue-100 to-gray-200">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 animate-fade-in p-2">
        Welcome to My App 🚀
      </h1>

      <div className="flex flex-col space-y-4 w-64">
        <button
          onClick={() => navigate("/todolist")}
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out transform active:scale-95"
        >
          📋 Go to Todo List
        </button>

        <button
          onClick={() => navigate("/counter")}
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out transform active:scale-95"
        >
          🔢 Go to Counter
        </button>

        <button
          onClick={() => navigate("/notepad")}
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out transform active:scale-95"
        >
          📝 Go to Notepad
        </button>
      </div>
    </div>
  );
};

export default Home;
