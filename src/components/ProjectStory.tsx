"use client";

import { motion } from "framer-motion";

const storyTimeline = [
  {
    phase: "PROBLEM",
    text: "Traditional events have scattered processes: physical invites, chaotic photo sharing, and unorganized food management."
  },
  {
    phase: "IDEA",
    text: "Create a single digital platform to unify these experiences for guests and organizers alike."
  },
  {
    phase: "BUILD",
    text: "Developed a full-stack solution integrating QR generation, database management, and AI models."
  },
  {
    phase: "RESULT",
    text: "A seamless, modern reception experience where guests have everything they need on their phone."
  }
];

export default function ProjectStory() {
  return (
    <section className="py-24 relative bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-space font-bold tracking-tighter mb-8 text-center">
            WHY I BUILT IT
          </h3>
          
          <div className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed text-center mb-16 space-y-6">
            <p>
              I wanted to explore how a traditional reception experience could become more interactive and convenient using modern web technologies and AI-assisted tools.
            </p>
            <p>
              Instead of creating just another invitation website, I experimented with combining multiple guest-facing features into one connected platform.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />
            
            <div className="space-y-12 relative">
              {storyTimeline.map((item, index) => (
                <motion.div 
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full md:text-right">
                    <div className={`p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}>
                      <h4 className="text-sm font-space font-bold tracking-widest text-blue-500 mb-2">
                        {item.phase}
                      </h4>
                      <p className="text-zinc-300 text-sm md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-zinc-950 border-2 border-zinc-800 items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-zinc-600" />
                  </div>
                  
                  <div className="flex-1 w-full hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
