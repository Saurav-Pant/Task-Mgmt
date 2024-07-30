"use client";

import React, { useState } from "react";
import { Plus, Loader, Calendar, PenTool, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Spinner from "@/components/LoadingSpinner";

const page = ({ status }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [priority, setPriority] = useState("Not Selected");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    if (!title) {
      setError("Please fill in all required fields.");
      return;
    }
    const token = Cookies.get("token");
  
    const task = {
      title,
      description,
      dateTime,
      priority,
      deadline,
      status,
    };
  
    setIsLoading(true); 

    const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  
    try {
      const response = await
       fetch(
        `${Backend_URL}/tasks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(task),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        console.log("Task created:", data);
        router.push("/Dashboard");
        window.location.reload();
      } else {
        const error = await response.json();
        console.error("Failed to create task:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); 
    }
    setError("");
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white">
      <div className="p-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-bold mb-4 focus:outline-none resize"
        />

        <div className="space-y-2">
          <div className="flex items-center">
            <Loader size={20} className="mr-2 text-gray-500" />
            <span className="w-24 text-gray-500">Status</span>
            <input
              type="text"
              value={status}
              className="flex-grow p-1 border rounded resize"
              readOnly
            />
          </div>
          <div className="flex items-center">
            <AlertCircle size={20} className="mr-2 text-gray-500" />
            <span className="w-24 text-gray-500">Priority</span>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="flex-grow p-1 border rounded resize"
            >
              <option value="">Not Selected</option>
              <option value="URGENT">Urgent</option>
              <option value="MEDIUM">Medium</option>
              <option value="EASY">Easy</option>
              <option value="HARD">Hard</option>
            </select>
          </div>
          <div className="flex items-center">
            <Calendar size={20} className="mr-2 text-gray-500" />
            <span className="w-24 text-gray-500">Deadline</span>
            <input
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="flex-grow p-1 border rounded text-gray-500 resize"
            />
          </div>
          <div className="flex items-center">
            <PenTool size={20} className="mr-2 text-gray-500" />
            <span className="w-24 text-gray-500">Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex-grow p-1 border rounded resize"
              // @ts-ignore
              rows="3"
            ></textarea>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 flex items-center text-blue-500 hover:text-blue-700"
        >
          <Plus size={16} className="mr-1" />
          Add custom property
        </button>
      </div>

      <div className="border-t p-4">
        <p className="text-gray-500">
          Start writing, or drag your own files here.
        </p>
      </div>

      {error && (
        <div className="p-4">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      <div className="p-4">
        <button
          type="submit"
          className="w-full bg-gradient-to-b from-[#4C38C2] to-[#2F2188] text-white p-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Create Task"}
        </button>
      </div>
    </form>
  );
};

export default page;
