import { FaUserCircle } from "react-icons/fa";
import ActiveRoute from "./ActiveRoute";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
            S
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Skill<span className="text-blue-600">Sphere</span>
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">
            <ActiveRoute href={"/"}>Home</ActiveRoute>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            <ActiveRoute href={"/courses"}>All Courses</ActiveRoute>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            <ActiveRoute href={"/instructor"}>Instructors</ActiveRoute>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            <ActiveRoute href={"/about"}>About</ActiveRoute>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-2">
          <button className="text-2xl text-gray-700 hover:text-blue-600">
            <FaUserCircle />
          </button>
          <button className="btn bg-blue-600 text-base-200">login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
