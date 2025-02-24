import React from "react";
import { Link } from "react-router-dom"; // Fix incorrect import

const Header = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <Link
        to="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text hover:from-yellow-500 hover:to-red-500 transition-all duration-300"
      >
        React-Redux
      </Link>
    </div>
  );
};

export default Header;
