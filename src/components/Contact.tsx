"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-zinc-950 border-t border-zinc-900 pt-32 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-space tracking-widest text-zinc-500">05 / CONTACT</span>
          <div className="h-[1px] w-12 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-space font-bold tracking-tighter leading-[0.9] mb-8">
              LET'S BUILD
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
                SOMETHING.
              </span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-md">
              Have an idea, project, opportunity, or just want to connect?
            </p>

            <form 
              className="mt-12 flex flex-col gap-4 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const subject = formData.get("subject");
                const message = formData.get("message");
                window.location.href = `mailto:shezilmuhammeee@gmail.com?subject=${encodeURIComponent(subject as string || "Portfolio Contact")}&body=${encodeURIComponent(`Hi Shezil,\n\nI'm ${name}.\n\n${message}`)}`;
              }}
            >
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 focus:outline-none focus:border-lime-400 transition-colors"
              />
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 focus:outline-none focus:border-lime-400 transition-colors"
              />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows={4} 
                required 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 focus:outline-none focus:border-lime-400 transition-colors resize-none"
              />
              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 mt-2 bg-lime-400 text-zinc-950 font-space font-bold text-sm tracking-widest hover:bg-lime-300 hover:scale-[1.02] transition-all rounded-lg"
              >
                SEND MESSAGE <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-12 lg:pl-16 lg:border-l border-zinc-900">
            <div>
              <h4 className="text-xs font-space font-bold tracking-widest text-zinc-600 mb-2 uppercase">Email</h4>
              <a href="mailto:shezilmuhammeee@gmail.com" className="text-xl font-medium text-zinc-300 hover:text-lime-400 transition-colors">
                shezilmuhammeee@gmail.com
              </a>
            </div>
            
            <div>
              <h4 className="text-xs font-space font-bold tracking-widest text-zinc-600 mb-2 uppercase">Phone / Contact</h4>
              <a href="tel:9778752160" className="text-xl font-medium text-zinc-300 hover:text-lime-400 transition-colors">
                9778752160
              </a>
            </div>

            <div>
              <h4 className="text-xs font-space font-bold tracking-widest text-zinc-600 mb-2 uppercase">Socials</h4>
              <div className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/shezil-muhammed-52a0933a0/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3BPbuMU%2FjkTUio%2FkduFNk3Uw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-zinc-300 hover:text-lime-400 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/sheziiscoding" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-zinc-300 hover:text-lime-400 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Footer Footer */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-space tracking-widest text-zinc-500">
          <div>
            © 2026 SHEZIL MUHAMMED
          </div>
          
          <div className="flex gap-4 items-center">
            <span className="hidden md:inline">CSE</span>
            <span className="hidden md:inline">•</span>
            <span>DEVELOPER</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">BUILDER</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/sheziiscoding" className="hover:text-zinc-300 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/shezil-muhammed-52a0933a0/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3BPbuMU%2FjkTUio%2FkduFNk3Uw%3D%3D" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
            <a href="mailto:shezilmuhammeee@gmail.com" className="hover:text-zinc-300 transition-colors">Email</a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <span className="text-[10px] font-space tracking-[0.3em] text-zinc-700">
            Built with curiosity & code.
          </span>
        </div>
      </div>
    </footer>
  );
}
