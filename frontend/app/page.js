"use client";
import React, { useState } from "react";
import TaskDisplay from "./Components/Tasks/TaskDisplay";
import TaskForm from "./Components/Tasks/TaskForm";

const Page = () => {
  const [maintask, setMaintask] = useState([]);

  const handleAddTask = (task) => {
    setMaintask([...maintask, task]);
  };

  const handleDeleteTask = (index) => {
    const copy = [...maintask];
    copy.splice(index, 1);
    setMaintask(copy);
  };

  return (
    <div className="bg-[#131127] pt-22 font-inter max-w-screen min-h-screen pl-30 pr-6 overflow-hidden">
      <h1 className="text-3xl font-semibold tracking-tight mb-2 text-white">Tasks</h1>
      <div className="text-white text-lg font-semibold items-center py-4 px-6 mb-1">
        <TaskDisplay tasks={maintask} onDelete={handleDeleteTask} />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight mb-4 text-white">Add Tasks</h1>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default Page;
