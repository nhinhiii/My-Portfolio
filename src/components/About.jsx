import React from "react";

export const About = () => {
  return (
    <section id="scroll" className="py-24 px-5 relative">
      <div className="container mx-auto max-auto max-w-5xl">
        <h1 className="text-3xl md:text-5xl text-main font-semibold">
          Welcome to my Portfolio!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <p className="text-4xl text-[var(--general)]">
              {" "}
              I'm
              <span className="text-[var(--primary)]"> Nhi Nguyen </span>{" "}
            </p>
            <p className="text-sm text-[var(--general)]">
              {" "}
              An undergrade student at Georgia Institute of Technology <br />{" "}
              with my main main focus are People and Intelligence{" "}
            </p>
            <p className="text-[var(--general)]">
              I'm passionate about creating social good applications and bring
              technologies to improve our daily life. Besides coding, I love to
              spend my painting and cooking!
            </p>
          </div>

          <div className="grid grid-cols-1">
            <image
              src="./image/profile.jpeg"
              alt="My profile"
              className="h-full rounded-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
