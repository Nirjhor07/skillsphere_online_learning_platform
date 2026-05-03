"use client";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import ActiveRoute from "./ActiveRoute";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const handleLogout = () => {
    authClient.signOut();
  };

  const links = (
    <>
      {/* <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium"> */}
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
      {/* </ul> */}
    </>
  );

  // const loggedUser = session?.user;
  // console.log(loggedUser.name);
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
          {links}
        </ul>
        {/* User Section */}
        <div className="flex items-center gap-4">
          {!session?.user ? (
            // Non-logged-in: Show buttons
            <>
              <Link
                href="/login"
                className="hidden md:block px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Sign Up
              </Link>
              {/* Mobile dropdown */}
              <details className="md:hidden group relative">
                <summary className="list-none cursor-pointer text-2xl text-gray-700">
                  <FaUserCircle />
                </summary>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition last:rounded-b-lg"
                  >
                    Sign Up
                  </Link>
                </div>
              </details>
            </>
          ) : (
            // Logged-in: Show profile dropdown
            <>
              <div className="hidden md:block group relative">
                <button className="flex items-center gap-2">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-violet-500">
                    <Image
                      src={session?.user.image}
                      fill
                      alt={session?.user.name}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {session?.user.name}
                  </span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="font-semibold text-gray-800 truncate">
                      {session?.user.name}
                    </p>
                  </div>

                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition last:rounded-b-lg flex items-center gap-2"
                  >
                    <FaSignOutAlt className="text-sm" />
                    Logout
                  </button>
                </div>
              </div>

              {/* Mobile - details dropdown */}
              <details className="md:hidden relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-violet-500">
                    <Image
                      src={session?.user.image}
                      fill
                      alt={session?.user.name}
                      className="object-cover"
                    />
                  </div>
                </summary>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="font-semibold text-gray-800 truncate">
                      {session?.user.name}
                    </p>
                  </div>
                  {/* dropdown menu mobile */}
                  <ul className="flex flex-col gap-2 text-gray-700 font-medium ml-4">
                    {links}
                  </ul>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition last:rounded-b-lg flex items-center gap-2"
                  >
                    <FaSignOutAlt className="text-sm" />
                    Logout
                  </button>
                </div>
              </details>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
