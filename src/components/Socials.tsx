"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    label: "View Repositories",
    url: "YOUR_GITHUB_URL",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  },
  {
    name: "LinkedIn",
    label: "Professional Network",
    url: "YOUR_LINKEDIN_URL",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  },
  {
    name: "Instagram",
    label: "Creative Work",
    url: "YOUR_INSTAGRAM_URL",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  },
  {
    name: "Email",
    label: "Get In Touch",
    url: "mailto:YOUR_EMAIL",
    icon: <Mail className="w-6 h-6" />
  }
];

export default function Socials() {
  return (
    <section className="py-32 relative bg-lime-400 border-t border-zinc-950/20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tighter mb-16 text-center">
          FIND ME ONLINE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-zinc-950/20 bg-lime-400/30 hover:bg-zinc-950/50 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between h-48 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6 text-zinc-900" />
              </div>
              
              <div className="w-12 h-12 rounded-full bg-zinc-950/50 flex items-center justify-center text-zinc-800 group-hover:scale-110 group-hover:text-zinc-950 transition-all duration-300">
                {social.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-space font-bold tracking-tight text-zinc-900 mb-1">
                  {social.name}
                </h3>
                <p className="text-sm text-zinc-800 font-medium">
                  {social.label}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}



