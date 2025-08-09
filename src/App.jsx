import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineMenu, MdPersonalInjury } from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaShoppingCart, FaLaptopCode } from "react-icons/fa";

import Personal from './components/Personal';
import Fitness from './components/Fitness';
import Finance from './components/Finance';
import Shopping from './components/Shopping';
import Work from './components/Work';

export default function App() {
  const mainRef = useRef(null);
  const personalRef = useRef(null);
  const fitnessRef = useRef(null);
  const financeRef = useRef(null);
  const shoppingRef = useRef(null);
  const workRef = useRef(null);

  const [showSidebar, setShowSidebar] = useState(false);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setShowSidebar(false);
  };

  const fadeUpPop = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-white to-white text-black">

      {/* Header */}
      <header className="border-b border-green-300 py-4 px-4 fixed top-0 left-0 w-full bg-transparent bg-opacity-80 backdrop-blur z-40 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <MdOutlineMenu
            className="text-3xl text-gray-800 cursor-pointer"
            onClick={() => setShowSidebar(prev => !prev)}
          />
          <h1 className="text-xl font-bold text-gray-800 cursor-pointer"
            onClick={() => scrollTo(mainRef)}>To-Do App</h1>
          <div className="w-8" />
        </div>
      </header>

      {/* Main Intro */}
      <div ref={mainRef} className="pt-80 h-screen pb-12 pl-64">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        >
          <h2 className='text-4xl font-bold text-gray-800'>
            Welcome Madhesh 
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/133/583/non_2x/man-with-glasses-and-headphones-logo-vector.jpg"
              alt="Avatar"
              className="w-14 h-14 rounded-full inline-block ml-3 align-middle"
            />
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Organize your daily tasks with ease.
          </p>
        </motion.div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', duration: 0.7 }}
            className="fixed top-[64px] left-0 h-full w-60 bg-transparent border-r-8 border-transparent z-30 shadow-md"
          >
            <div className="flex flex-col p-4 gap-6">
              <button onClick={() => scrollTo(personalRef)} className="flex items-center gap-3 text-lg cursor-pointer font-medium hover:text-green-600">
                <MdPersonalInjury className="text-2xl" /> Personal
              </button>
              <button onClick={() => scrollTo(fitnessRef)} className="flex items-center gap-3 text-lg font-medium hover:text-green-600">
                <IoMdFitness className="text-2xl" /> Fitness
              </button>
              <button onClick={() => scrollTo(financeRef)} className="flex items-center gap-3 text-lg font-medium hover:text-green-600">
                <CiMoneyCheck1 className="text-2xl" /> Finance
              </button>
              <button onClick={() => scrollTo(shoppingRef)} className="flex items-center gap-3 text-lg font-medium hover:text-green-600">
                <FaShoppingCart className="text-2xl" /> Shopping
              </button>
              <button onClick={() => scrollTo(workRef)} className="flex items-center gap-3 text-lg font-medium hover:text-green-600">
                <FaLaptopCode className="text-2xl" /> Work
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Sections */}
      <main className={`pt-4 pb-20 transition-all duration-300 ${showSidebar ? 'ml-60' : ''}`}>
        <section ref={personalRef} className="min-h-screen flex items-center justify-center">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl">
            <Personal />
          </motion.div>
        </section>
        <section ref={fitnessRef} className="min-h-screen flex items-center justify-center">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl">
            <Fitness />
          </motion.div>
        </section>
        <section ref={financeRef} className="min-h-screen flex items-center justify-center">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl">
            <Finance />
          </motion.div>
        </section>
        <section ref={shoppingRef} className="min-h-screen flex items-center justify-center">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl">
            <Shopping />
          </motion.div>
        </section>
        <section ref={workRef} className="min-h-screen flex items-center justify-center">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl">
            <Work />
          </motion.div>
        </section>
      </main>
    </div>
  );
}