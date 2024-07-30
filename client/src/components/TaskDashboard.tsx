"use client";

import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "./Sidebar";
import Column from "./Column";
import { TaskType } from "../types";
import { Search, Calendar, Zap, Filter, Share } from "lucide-react";
import Image from "next/image";
import First from "../../Assets/First.png";
import Second from "../../Assets/Second.png";
import Third from "../../Assets/Third.png";

const TaskDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [token, setToken] = useState<string | null>(null);

  const name = localStorage.getItem("name");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchTasks(storedToken);
    }
  }, []);

  const fetchTasks = (authToken: string) => {
    fetch("https://task-mgmt-e8us.onrender.com/tasks", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  const moveTask = (id: string, newStatus: string) => {
    fetch(`https://task-mgmt-e8us.onrender.com/tasks/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task
          )
        );
      })
      .catch((error) => console.error("Error updating task status:", error));
  };

  const columns = ["TODO", "INPROGRESS", "UNDERREVIEW", "FINISHED"];

  if (!token) {
    return <div>Please log in to view your tasks.</div>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex max-h-screen ">
        <Sidebar />
        <div className="flex-1 flex flex-col p-4 bg-gray-100 mb-6 mt-2">
          <div className="mb-4 overflow">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Good Morning, {name}!</h1>
            </div>
            <div className="mt-4 flex gap-4 overflow-hidden">
              <div className="h-32 w-[363px] p-4 bg-white border rounded flex items-center gap-4 flex-shrink-0">
                <Image src={First} width={200} height={200} alt="First" />
                <div>
                  <h6 className="text-md font-semibold text-[#757575]">
                    Introducing tags
                  </h6>
                  <p className="text-sm text-[#868686]">
                    Easily categorize and find your notes by adding tags. Keep
                    your workspace clutter-free and efficient.
                  </p>
                </div>
              </div>
              <div className="h-32 w-[363px] p-4 bg-white border rounded shadow flex items-center gap-4 flex-shrink-0">
                <Image src={Second} width={200} height={200} alt="Second" />
                <div>
                  <h6 className="text-md font-semibold text-[#757575]">
                    Share Notes Instantly
                  </h6>
                  <p className="text-sm text-[#868686]">
                    Effortlessly share your notes with others via email or link.
                    Enhance collaboration with quick sharing options.
                  </p>
                </div>
              </div>
              <div className="h-32 w-[363px] p-4 bg-white border rounded shadow flex items-center gap-4 flex-shrink-0">
                <Image src={Third} width={200} height={200} alt="Third" />
                <div>
                  <h6 className="text-md font-semibold text-[#757575]">
                    Access Anywhere
                  </h6>
                  <p className="text-sm text-[#868686]">
                    Sync your notes across all devices. Stay productive whether
                    you are on your phone, tablet, or computer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center py-6 px-4">
            <div className="relative mr-4 flex-grow max-w-md">
              <div className="relative w-48">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-10 pl-4 pr-10 py-2 rounded-lg border"
                />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            <div className="flex items-center bg-[#F4F4F4] rounded-md">
              <div className="mr-4 p-2 w-40 h-10 rounded-lg flex justify-between">
                <span className="text-gray-600">Calendar view</span>
                <Calendar className="text-[#797979]" />
              </div>
              <div className="mr-4 p-2 w-36 h-10 rounded-lg flex justify-between">
                <span className="text-gray-600">Automation</span>
                <Zap className="text-[#797979]" />
              </div>
              <div className="mr-4 p-2 w-24 h-10 rounded-lg flex justify-between">
                <span className="text-gray-600">Filter</span>
                <Filter className="text-[#797979]" />
              </div>
              <div className="mr-4 p-2 w-24 h-10 rounded-lg flex justify-between">
                <span className="text-gray-600">Share</span>
                <Share className="text-[#797979]" />
              </div>
              <button className="bg-gradient-to-b from-[#4C38C2] to-[#2F2188] text-white px-4 py-2 rounded-lg">
                Create new +
              </button>
            </div>
          </div>
          <div className="flex-grow bg-white overflow-x-auto overflow-y-hidden">
            <div className="flex gap-4 h-full min-w-max">
              {columns.map((status) => (
                <div key={status} className="w-[270px] flex-shrink-0">
                  <Column
                    status={status}
                    tasks={tasks.filter((task) => task.status === status)}
                    moveTask={moveTask}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default TaskDashboard;
