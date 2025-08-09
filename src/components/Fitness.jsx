import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Fitness = () => {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("fitnessTasks")) || []);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("fitnessTasks", JSON.stringify(tasks));
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
      <h2 className="text-2xl font-bold mb-4">🏋️ Fitness</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Add a fitness task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, i) => (
          <li key={i} className="bg-white p-3 rounded shadow flex justify-between items-center">
            {task}
            <button onClick={() => removeTask(i)} className="text-red-500">✕</button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Fitness;