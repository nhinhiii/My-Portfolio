import React from "react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-5 relative">
      <div className="container mx-auto max-auto max-w-5xl">
        <h2 className="text-[36px] md:text-4xl text-main font-semibold mb-20 text-center">
          About me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-8">
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
          </div>

          <div className="grid grid-cols-1">
            <img
              src="/image/profile.png"
              alt="My profile"
              className="ml-12 h-auto w-100 rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
