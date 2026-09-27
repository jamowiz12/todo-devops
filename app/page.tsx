"use client";

import { useState } from "react";

type Task = {
  id: number;
  text: string;
};

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const trimmedTask = task.trim();

    if (trimmedTask === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      text: trimmedTask,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          TODO APPLICATION
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
          />

          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>

        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks yet.
            </p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div>
                  <input type="checkbox" className="mr-3" />
                  <span>{task.text}</span>
                </div>

                <button className="text-red-500">
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}