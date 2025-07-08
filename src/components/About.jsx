import React from "react";
import { motion } from "motion/react";

export const About = () => {
  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };
  return (
    <section id="about" className="py-28 px-5 relative">
      <div className="container mx-auto max-auto max-w-5xl">
        <h2 className="text-[36px] md:text-5xl text-main font-semibold mb-20 text-center">
          About me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <motion.div {...slideInLeft} className="space-y-8">
            <p className="text-3xl text-[var(--general)]">
              {" "}
              I'm
              <span className="text-[var(--primary)]"> Nhi Nguyen </span>{" "}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-[var(--general)]">
                Undergraduate CS student at Georgia Institute of Technology
              </li>
              <li className="text-[var(--general)]">
                Concentrate in People and Intelligence
              </li>
              <li className="text-[var(--general)]">
                Love painting, cooking, and playing badminton
              </li>
              <li className="text-[var(--general)]">
                I love using my creativity and technical skills to build
                social-good apps. I'm also passionate about crafting dynamic
                webistes, and working with AI to understand people's behaviors
              </li>
            </ul>
          </motion.div>

          <motion.div {...slideInRight} className="flex justify-center">
            <img
              src="/My-Portfolio/image/profile.png"
              alt="My profile"
              className="ml-12 mt-12 h-auto w-80 rounded-sm card-hover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
