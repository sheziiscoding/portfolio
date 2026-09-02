"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";

const screens = [
  { name: "Invitation Landing", image: "/project-invitation.jpg" },
  { name: "AI Photo Recognition", image: "/project-ai.jpg" },
  { name: "Food QR System", image: "/project-qr.jpg" },
  { name: "Reception Dashboard", image: "/project-dashboard.jpg" },
];

const tags = [
  "AI", "WEB DEVELOPMENT", "PHOTO RECOGNITION", "QR", "DATABASE", "FULL STACK"
];

export default function FeaturedProject() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="project" className="py-32 relative bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-space tracking-widest text-zinc-500">04 / PROJECT</span>
          <div className="h-[1px] w-12 bg-zinc-800" />
        </div>

        <div className="mb-24">
          <h2 className="text-sm font-space tracking-[0.3em] text-blue-500 mb-6 uppercase">
            The Thing I'm Proud Of
          </h2>
          <h3 className="text-4xl md:text-6xl font-space font-bold tracking-tighter mb-6 uppercase">
            All-In-One Reception<br />Assistant
          </h3>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl">
            An AI-assisted digital reception experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Project Details */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <p className="text-lg text-zinc-300 leading-relaxed font-light">
              I built an all-in-one digital reception platform that combines event invitations, AI-assisted photo recognition, food management through QR codes, and guest interaction into a single web experience.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-sm font-space font-bold tracking-widest text-zinc-200 mb-2">DIGITAL INVITATION</h4>
                <p className="text-zinc-500">A modern invitation website designed to give guests all event information in one place.</p>
              </div>
              <div>
                <h4 className="text-sm font-space font-bold tracking-widest text-zinc-200 mb-2">AI-ASSISTED PHOTO RECOGNITION</h4>
                <p className="text-zinc-500">Guests can use AI-assisted photo recognition to help identify and find their event photographs.</p>
              </div>
              <div>
                <h4 className="text-sm font-space font-bold tracking-widest text-zinc-200 mb-2">FOOD QR SYSTEM</h4>
                <p className="text-zinc-500">QR-based food access/verification system designed to make event food management faster and more organized.</p>
              </div>
              <div>
                <h4 className="text-sm font-space font-bold tracking-widest text-zinc-200 mb-2">RECEPTION EXPERIENCE</h4>
                <p className="text-zinc-500">The goal is to replace scattered physical processes with one connected digital reception experience.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="text-[10px] font-space font-bold tracking-widest px-3 py-1.5 border border-zinc-800 rounded-full text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-space font-bold text-xs tracking-widest hover:bg-white hover:scale-105 transition-all">
                VIEW PROJECT <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-300 font-space font-bold text-xs tracking-widest hover:border-zinc-500 hover:text-white transition-all">
                GITHUB <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>

          {/* Browser Mockup */}
          <div className="lg:col-span-7 sticky top-32">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md overflow-hidden shadow-2xl shadow-blue-900/10">
              {/* Browser Header */}
              <div className="h-12 border-b border-zinc-800 flex items-center px-4 gap-4 bg-zinc-950">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-500 flex items-center gap-2">
                    reception-assistant.app
                  </div>
                </div>
              </div>

              {/* Browser Content */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] bg-zinc-950 overflow-hidden group">
                {screens.map((screen, idx) => (
                  <motion.div
                    key={screen.name}
                    initial={false}
                    animate={{
                      x: `${(idx - activeScreen) * 100}%`,
                      opacity: idx === activeScreen ? 1 : 0.5
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900"
                  >
                    <div className="relative w-full h-full">
                      {/* You'll need to import Image from "next/image" at the top of the file */}
                      <img
                        src={screen.image}
                        alt={screen.name}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'border-2', 'border-dashed', 'border-zinc-700/50', 'm-8', 'rounded-xl');
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-zinc-500 font-space tracking-widest text-sm uppercase">${screen.name} (Missing Image)</span>`;
                        }}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Navigation Controls */}
                <button 
                  onClick={() => setActiveScreen(prev => (prev - 1 + screens.length) % screens.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveScreen(prev => (prev + 1) % screens.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Progress Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {screens.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreen(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeScreen ? "bg-blue-500 w-6" : "bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
