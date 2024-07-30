"use client";

import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemType, TaskType } from "../types";
import Task from "./Task";
import { AddTaskButton } from "./TaskButton";
import { TaskCardModal } from "./TaskCardModel";
import Image from "next/image";
import Frame from "../../Assets/Frame.png";

interface ColumnProps {
  status: string;
  tasks: TaskType[];
  moveTask: (id: string, newStatus: string) => void;
}

const Column: React.FC<ColumnProps> = ({ status, tasks, moveTask }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.TASK,
    drop: (item: { id: string }) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
    // @ts-ignore
      ref={drop}
      className={`flex-1 p-2 m-1 rounded-lg ${
        isOver ? "bg-gray-200" : ""
      } flex flex-col h-full max-h-[calc(100vh-100px)]`}
    >
      <div className="flex justify-between items-center">
        <h2 className="mb-4 text-sm font-normal text-[#555555] sticky top-0 bg-inherit z-10 pl-4">
          {status === "TODO"
            ? "To Do"
            : status === "INPROGRESS"
            ? "In Progress"
            : status === "UNDERREVIEW"
            ? "Under Review"
            : status === "FINISHED"
            ? "Finished"
            : "Archived"}
        </h2>
        <Image src={Frame} alt="Frame" width={20} height={20} />
      </div>

      <div className="overflow-y-auto flex-grow">
        {tasks.map((task) => (
          <Task key={task.id} task={task} moveTask={moveTask} />
        ))}
        <AddTaskButton
          onClick={() => {
            openModal();
          }}
        />
        <TaskCardModal
          isOpen={isModalOpen}
          onClose={closeModal}
          status={status} // Pass the status prop
        />
      </div>
    </div>
  );
};

export default Column;
