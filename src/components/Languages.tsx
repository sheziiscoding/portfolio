"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const languages = [
  {
    name: "English",
    label: "Fluent / Bilingual",
    description: "Professional working proficiency & technical communication",
  },
  {
    name: "Malayalam",
    label: "Native",
    description: "Mother tongue & conversational fluency",
  },
  {
    name: "Hindi",
    label: "Conversational",
    description: "Basic communication & understanding",
  }
];

export default function Languages() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 relative bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-space tracking-widest text-zinc-500">02 / SKILLS</span>
          <div className="h-[1px] w-12 bg-zinc-800" />
        </div>

        <h2 className="text-4xl md:text-5xl font-space font-bold tracking-tighter mb-24">
          LANGUAGES I SPEAK
        </h2>

        <div className="flex flex-col border-t border-zinc-900">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-zinc-900 py-12 md:py-16 transition-colors duration-500 hover:bg-zinc-900/20 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 z-10">
                <span className={clsx(
                  "text-5xl md:text-7xl font-space font-bold tracking-tighter transition-colors duration-500",
                  hoveredIndex === index ? "text-blue-500" : "text-zinc-300"
                )}>
                  {lang.name}
                </span>
                <span className="text-sm font-space tracking-widest text-zinc-500 md:mb-3">
                  {lang.label}
                </span>
              </div>
              
              <div className="md:w-1/3 z-10">
                <p className={clsx(
                  "text-base md:text-lg transition-colors duration-500",
                  hoveredIndex === index ? "text-zinc-300" : "text-zinc-500"
                )}>
                  {lang.description}
                </p>
              </div>

              {/* Hover effect background */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="language-hover"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
