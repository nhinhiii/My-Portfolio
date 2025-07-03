import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

//home, intorduction, skills, experience, projects, contact
const nav = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
const Narbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-1/2 top-8 transform -translate-x-1/2 w-[50%] max-w-4xl " +
          "border border-[var(--border-color)] rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-3xl transition-colors duration-500",
        isScrolled ? "py-4 shadow-lg" : "py-5"
      )}
    >
      {/* this is for desktop */}
      <div className="flex items-center justify-center space-x-8">
        {nav.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className={cn(
              "text-[var(--general)] px-2 pb-1 border-b-2 border-transparent",
              "hover:border-[var(--border-color)] transition-colors"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Narbar;
