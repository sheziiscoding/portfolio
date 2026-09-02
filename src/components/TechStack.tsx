"use client";

import { motion } from "framer-motion";

const technologies = [
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "AI-assisted tools",
  "QR technology",
  "REST APIs"
];

export default function TechStack() {
  return (
    <section className="py-24 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h3 className="text-sm font-space tracking-[0.3em] text-zinc-500 mb-12 uppercase">
          BUILT WITH
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-white transition-colors cursor-default backdrop-blur-sm"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
