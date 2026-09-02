"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "/#about", external: false },
    { name: "SKILLS", href: "/#skills", external: false },
    { name: "PROJECT", href: "/#project", external: false },
    { name: "RESUME", href: "/resume.pdf", external: true },
    { name: "CONTACT", href: "/#contact", external: false },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-zinc-950/70 backdrop-blur-md border-zinc-800/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-space tracking-tighter hover:text-lime-400 transition-colors">
          SM
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-zinc-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-xs font-semibold tracking-widest flex items-center gap-2 hover:text-lime-400 transition-colors group"
          >
            LET'S TALK <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-zinc-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-space tracking-widest text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-space tracking-widest text-lime-400 flex items-center gap-2"
          >
            LET'S TALK ↗
          </a>
        </motion.div>
      )}
    </header>
  );
}
