"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: y2, opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col">
            <span className="text-sm font-space tracking-[0.3em] text-lime-400 mb-4">PORTFOLIO '26</span>
            <h1 className="text-6xl md:text-8xl font-space font-bold tracking-tighter leading-[0.9]">
              HEY,
              <br />
              I'M
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
                SHEZIL.
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl font-medium text-zinc-300 max-w-lg mt-4 font-space">
            Computer Science Student
            <br />& Software Developer.
          </p>

          <p className="text-zinc-400 max-w-md text-base leading-relaxed">
            I'm a CSE student who enjoys building practical digital products, experimenting with AI-assisted experiences, and turning ideas into functional web applications.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#project" className="px-8 py-4 bg-lime-400 text-zinc-950 font-space font-bold text-sm tracking-widest hover:bg-lime-300 hover:scale-105 transition-all">
              EXPLORE MY WORK
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-zinc-800 text-zinc-300 font-space font-bold text-sm tracking-widest hover:border-lime-400 hover:text-lime-400 transition-all">
              VIEW RESUME
            </a>
            <a href="#contact" className="px-8 py-4 border border-zinc-800 text-zinc-300 font-space font-bold text-sm tracking-widest hover:border-zinc-500 hover:text-white transition-all hidden sm:block">
              LET'S CONNECT
            </a>
          </div>
        </motion.div>

        {/* Visual Composition */}
        <motion.div 
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[600px] w-full flex items-center justify-center"
        >
          {/* Layered shapes */}
          <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/20 to-transparent rounded-full blur-3xl" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border border-zinc-800/50 rounded-full border-dashed"
          />
          
          {/* Main Photo Container */}
          <div className="relative w-72 h-[400px] md:w-80 md:h-[450px] z-10">
            <div className="absolute inset-0 bg-zinc-800 rounded-[2rem] rotate-[-6deg] scale-105 opacity-50" />
            <div className="absolute inset-0 bg-lime-900/30 rounded-[2rem] rotate-[3deg] scale-105 blur-sm" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-zinc-700/50 bg-zinc-900 z-10">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-sm font-space text-center p-6 border-2 border-dashed border-zinc-800 m-4 rounded-xl">
                [ REPLACE THIS PLACEHOLDER ]
                <br />
                Add your photo as 
                <br />
                `public/profile-photo.jpg`
              </div>
              {/* Note: The user should replace the src when they add their photo */}
              <Image
                src="/profile-photo.jpg"
                alt="Shezil Muhammed"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 z-20"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            {/* Floating Tags */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-12 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-4 py-2 rounded-full z-30"
            >
              <span className="text-xs font-space font-bold tracking-widest text-lime-400">CSE STUDENT</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-16 bottom-32 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-4 py-2 rounded-full z-30"
            >
              <span className="text-xs font-space font-bold tracking-widest text-zinc-300">DEVELOPER</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -right-8 bottom-16 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-4 py-2 rounded-full z-30"
            >
              <span className="text-xs font-space font-bold tracking-widest text-zinc-300">BUILDER</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-8 -top-6 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-4 py-2 rounded-full z-30"
            >
              <span className="text-xs font-space font-bold tracking-widest text-zinc-300">AI × WEB</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-space tracking-[0.3em] text-zinc-500 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}
