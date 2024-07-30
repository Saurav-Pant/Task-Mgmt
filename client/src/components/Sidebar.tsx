"use client";
import React from "react";
import {
  Bell,
  Sun,
  ChevronRight,
  Home,
  Layout,
  Settings,
  Users,
  BarChart2,
  Download,
} from "lucide-react";

const SidebarMenu = ({ className }: any) => {
  const name = localStorage.getItem("name");

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    window.location.href = "/";
  };

  return (
    <div className="w-64  h-screen flex flex-col ">
      <div className="p-4 ">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <span className="font-semibold text-gray-700">{name}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center justify-between space-x-4">
            <Bell size={18} />
            <Sun size={18} />
            <ChevronRight size={18} />
          </div>
          <div>
            <button
              className="bg-[#F4F4F4] text-[#797979] py-1 px-2 rounded-md  transition duration-200"
              onClick={LogOut}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <nav className="flex-1">
        <ul className="p-2">
          <li className="px-2 py-1 text-[#797979] hover:bg-gray-100 rounded-md cursor-pointer flex items-center">
            <Home size={18} className="mr-3" />
            Home
          </li>
          <li className="px-2 py-1 text-[#797979] hover:bg-gray-100 rounded-md cursor-pointer flex items-center">
            <Layout size={18} className="mr-3" />
            Boards
          </li>
          <li className="px-2 py-1 text-[#797979] hover:bg-gray-100 rounded-md cursor-pointer flex items-center">
            <Settings size={18} className="mr-3" />
            Settings
          </li>
          <li className="px-2 py-1 text-[#797979] hover:bg-gray-100 rounded-md cursor-pointer flex items-center">
            <Users size={18} className="mr-3" />
            Teams
          </li>
          <li className="px-2 py-1 text-[#797979] hover:bg-gray-100 rounded-md cursor-pointer flex items-center">
            <BarChart2 size={18} className="mr-3" />
            Analytics
          </li>
        </ul>
        <div className="px-4">
          <button className="bg-gradient-to-b from-[#4C38C2] to-[#2F2188] text-white px-4 py-2 rounded-lg flex items-center">
            <span className="mr-2">Create new task</span>
            <span className="text-blue-600 bg-white rounded-full w-4 h-4 flex items-center justify-center">
              +
            </span>
          </button>
        </div>
      </nav>
      <div className="p-1 sm:p-2 flex items-center text-[#666666] bg-[#F3F3F3] m-2 sm:m-4 rounded-lg justify-center flex-col sm:flex-row ">
        <div className="mb-2 sm:mb-0 sm:mr-3">
          <Download size={25} />
        </div>
        <div className="text-center sm:text-left">
          <span className="text-sm sm:text-md font-medium">
            Download the app
          </span>
          <br />
          <span className="text-xs sm:text-sm">Get the full experience</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
