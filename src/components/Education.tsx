"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ScrollText } from "lucide-react";

const educationDetails = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    date: "Present",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "group-hover:border-lime-400 group-hover:bg-lime-400/10",
    iconColor: "group-hover:text-lime-400",
    dotColor: "group-hover:bg-lime-400",
  },
  {
    degree: "Class XII (Computer Science Stream)",
    institution: "Nithyananda Bhavan",
    location: "Kannur, Kerala",
    date: "Completed",
    icon: <BookOpen className="w-5 h-5" />,
    color: "group-hover:border-zinc-500 group-hover:bg-zinc-800/50",
    iconColor: "group-hover:text-zinc-300",
    dotColor: "group-hover:bg-zinc-300",
  },
  {
    degree: "Class X",
    institution: "Chinmaya Vidyalaya",
    location: "Taliparamba, Kerala",
    date: "Completed",
    icon: <ScrollText className="w-5 h-5" />,
    color: "group-hover:border-zinc-500 group-hover:bg-zinc-800/50",
    iconColor: "group-hover:text-zinc-300",
    dotColor: "group-hover:bg-zinc-300",
  }
];

export default function Education() {
  return (
    <section className="py-24 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-space tracking-widest text-zinc-500">05 / EDUCATION</span>
          <div className="h-[1px] w-12 bg-zinc-800" />
        </div>

        <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tighter mb-16 text-zinc-100">
          ACADEMIC BACKGROUND
        </h2>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {educationDetails.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group cursor-default"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full border-4 border-zinc-950 bg-zinc-700 transition-colors duration-500 ${item.dotColor}`} />

              <div className={`p-8 rounded-2xl border border-zinc-900 bg-zinc-950/50 backdrop-blur-sm transition-all duration-500 ${item.color}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 transition-colors duration-500 ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-space font-bold text-zinc-200">
                      {item.degree}
                    </h3>
                  </div>
                  <div className="inline-block px-4 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-xs font-space tracking-widest text-zinc-400">
                    {item.date}
                  </div>
                </div>
                
                <div className="ml-0 md:ml-16">
                  <p className="text-lg text-zinc-400 font-medium">
                    {item.institution}
                  </p>
                  <p className="text-sm text-zinc-500 mt-1">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
