"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const timelineSteps = ["LEARN", "BUILD", "BREAK", "IMPROVE", "REPEAT"];

  return (
    <section id="about" className="py-32 relative border-t border-zinc-900 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-space tracking-widest text-zinc-500">01 / ABOUT</span>
          <div className="h-[1px] w-12 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-space font-bold tracking-tighter leading-tight">
              More than
              <br />
              <span className="text-zinc-500">just code.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
              I'm Shezil Muhammed, a Computer Science Engineering student passionate about software development and building things that solve real problems.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              I enjoy working across programming, backend development, databases, and AI-assisted applications. Instead of only learning technologies theoretically, I like turning what I learn into actual projects and experiences.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              I'm constantly learning, experimenting, and looking for opportunities to build products that are useful, creative, and technically interesting.
            </p>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="mt-32">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-0">
            {timelineSteps.map((step, index) => (
              <div key={step} className="flex items-center w-full md:w-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center group w-full md:w-auto"
                >
                  <div className="w-16 h-16 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center mb-4 group-hover:border-blue-600/50 group-hover:bg-blue-600/10 transition-all duration-500">
                    <span className="text-xs font-space tracking-widest text-zinc-400 group-hover:text-blue-500">
                      0{index + 1}
                    </span>
                  </div>
                  <span className="text-sm font-space font-bold tracking-widest text-zinc-300">
                    {step}
                  </span>
                </motion.div>
                
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:flex flex-1 items-center justify-center px-4">
                    <div className="h-[1px] w-full max-w-[100px] bg-zinc-800 relative">
                      <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 translate-x-1/2" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
