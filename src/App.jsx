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
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-green-300 to-white text-black bg-fixed text-gray-900">

      {/* Header */}
      <header className="border-b border-green-300 py-4 px-2 md:px-6 fixed top-0 left-0 w-full bg-transparent shadow-lg backdrop-blur z-40 transition-all duration-300 text-gray-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-6">
          <MdOutlineMenu
            className="text-3xl text-gray-800 cursor-pointer hover:text-green-500 transition-colors"
            onClick={() => setShowSidebar(prev => !prev)}
          />
          <div className="flex-1 flex justify-center">
            <h1
              className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer"
              onClick={() => scrollTo(mainRef)}
            >
              To-Do App
            </h1>
          </div>
          <div className="w-8" />
        </div>
      </header>

      {/* Main Intro */}
      <div ref={mainRef} className="pt-40 sm:pt-60 md:pt-80 h-screen pb-12 px-4 sm:px-6 md:px-8 md:pl-64">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-start text-left ml-2 sm:ml-4 md:ml-80">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Welcome Madhesh 
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/133/583/non_2x/man-with-glasses-and-headphones-logo-vector.jpg"
                alt="Avatar"
                className="w-16 h-16 rounded-full inline-block ml-3 align-middle ring-2 ring-green-300"
              />
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-600 leading-relaxed">
              Organize your daily tasks with ease.
            </p>
          </div>
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
            className="fixed top-[64px] left-0 h-full max-h-screen w-3/4 sm:w-2/3 md:w-60 bg-gradient-to-br from-green-500 via-green-300 to-white/80 backdrop-blur-md rounded-r-xl border-r-8 border-transparent z-30 shadow-md overflow-y-auto"
          >
            <div className="flex flex-col p-4 gap-4 sm:gap-6 text-sm sm:text-base">
              <button onClick={() => scrollTo(personalRef)} className="flex items-center gap-3 text-base sm:text-lg cursor-pointer font-medium hover:text-green-600 hover:scale-105 transform transition-all duration-200">
                <MdPersonalInjury className="text-2xl" /> Personal
              </button>
              <button onClick={() => scrollTo(fitnessRef)} className="flex items-center gap-3 text-base sm:text-lg font-medium hover:text-green-600 hover:scale-105 transform transition-all duration-200">
                <IoMdFitness className="text-2xl" /> Fitness
              </button>
              <button onClick={() => scrollTo(financeRef)} className="flex items-center gap-3 text-base sm:text-lg font-medium hover:text-green-600 hover:scale-105 transform transition-all duration-200">
                <CiMoneyCheck1 className="text-2xl" /> Finance
              </button>
              <button onClick={() => scrollTo(shoppingRef)} className="flex items-center gap-3 text-base sm:text-lg font-medium hover:text-green-600 hover:scale-105 transform transition-all duration-200">
                <FaShoppingCart className="text-2xl" /> Shopping
              </button>
              <button onClick={() => scrollTo(workRef)} className="flex items-center gap-3 text-base sm:text-lg font-medium hover:text-green-600 hover:scale-105 transform transition-all duration-200">
                <FaLaptopCode className="text-2xl" /> Work
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Sections */}
      <main className={`pt-4 sm:pt-6 pb-20 transition-all duration-300 ${showSidebar && window.innerWidth >= 768 ? 'ml-60' : ''}`}>
        <section ref={personalRef} className="min-h-screen flex items-center justify-center px-2 sm:px-4 scroll-mt-20">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <Personal />
          </motion.div>
        </section>
        <section ref={fitnessRef} className="min-h-screen flex items-center justify-center px-2 sm:px-4 scroll-mt-20">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <Fitness />
          </motion.div>
        </section>
        <section ref={financeRef} className="min-h-screen flex items-center justify-center px-2 sm:px-4 scroll-mt-20">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <Finance />
          </motion.div>
        </section>
        <section ref={shoppingRef} className="min-h-screen flex items-center justify-center px-2 sm:px-4 scroll-mt-20">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <Shopping />
          </motion.div>
        </section>
        <section ref={workRef} className="min-h-screen flex items-center justify-center px-2 sm:px-4 scroll-mt-20">
          <motion.div variants={fadeUpPop} initial="hidden" whileInView="visible" className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <Work />
          </motion.div>
        </section>
      </main>
    </div>
  );
}