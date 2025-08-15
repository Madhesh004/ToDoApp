import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Shopping = () => {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("shoppingTasks")) || []);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppingTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h2 className="text-xl sm:text-3xl font-extrabold mb-6 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
        🛒 Shopping
      </h2>
      <div className="bg-white rounded-lg shadow p-2 flex flex-col sm:flex-row gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTask();
            }
          }}
          className="border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 rounded-lg p-2 transition-all duration-200 flex-1 w-full"
          placeholder="Add a shopping task..."
        />
        <button
          onClick={addTask}
          className="bg-pink-500 hover:bg-pink-600 transition-colors duration-200 text-white px-4 rounded-lg shadow w-full sm:w-auto"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-white to-pink-50 p-3 rounded-lg shadow flex justify-between items-center hover:shadow-md transition-shadow duration-200 flex-col sm:flex-row gap-2 sm:gap-0"
          >
            {task}
            <button
              onClick={() => removeTask(i)}
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              ✕
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Shopping;