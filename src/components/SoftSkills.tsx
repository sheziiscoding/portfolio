"use client";

import { motion } from "framer-motion";

const softSkills = [
  "Leadership",
  "Team Player",
  "Problem Solving",
  "Adaptability",
  "Effective Communication",
  "Critical Thinking",
];

const spokenLanguages = [
  { name: "English", level: "Fluent / Bilingual" },
  { name: "Malayalam", level: "Native" },
  { name: "Hindi", level: "Conversational" },
];

export default function SoftSkills() {
  return (
    <section className="py-24 relative bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-space tracking-widest text-zinc-500">03 / BEYOND CODE</span>
          <div className="h-[1px] w-12 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Soft Skills */}
          <div>
            <h3 className="text-3xl md:text-4xl font-space font-bold tracking-tighter mb-10 text-zinc-100">
              SOFT SKILLS
            </h3>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 font-medium hover:border-lime-400 hover:text-lime-400 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-3xl md:text-4xl font-space font-bold tracking-tighter mb-10 text-zinc-100">
              LANGUAGES
            </h3>
            <div className="flex flex-col gap-6">
              {spokenLanguages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-end justify-between border-b border-zinc-900 pb-4 group"
                >
                  <span className="text-xl md:text-2xl font-space font-bold text-zinc-300 group-hover:text-lime-400 transition-colors">
                    {lang.name}
                  </span>
                  <span className="text-sm font-space tracking-widest text-zinc-500">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
