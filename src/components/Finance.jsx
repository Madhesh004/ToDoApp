import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Finance = () => {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("financeTasks")) || []);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("financeTasks", JSON.stringify(tasks));
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
      <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">💰 Finance</h2>
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
          className="border border-gray-300 focus:border-yellow-400 focus:ring focus:ring-yellow-200 rounded-lg p-2 transition-all duration-200 flex-1 w-full"
          placeholder="Add a finance task..."
        />
        <button onClick={addTask} className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 text-white px-4 rounded-lg shadow w-full sm:w-auto">Add</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, i) => (
          <motion.li key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="bg-gradient-to-r from-white to-yellow-50 p-3 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 hover:shadow-md transition-shadow duration-200">
            {task}
            <button onClick={() => removeTask(i)} className="text-red-500 hover:text-red-600 transition-colors">✕</button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Finance;