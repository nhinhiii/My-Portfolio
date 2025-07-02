import React from "react";
import { Spotlight } from "./ui/Spotlight";

export const Background = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen absolute"
        fill="var(--spot1)"
      />

      <Spotlight
        className="h-[70vh] w-[45vw] top-15 left-full absolute"
        fill="var(--spot2)"
      />

      <Spotlight
        className="left-72 top-28 h-[70vh] w-[40vw] absolute"
        fill="var(--spot3)"
      />
    </div>
  );
};
