import React from "react";
import { Background } from "../components/Background";
import { DarkMode } from "../components/DarkMode";
import Narbar from "../components/Narbar";
import { About } from "../components/About";
import { HomeSection } from "../components/HomeSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* open section */}
      <DarkMode />
      <Background />
      <Narbar />

      {/* introduction section */}
      <HomeSection />

      {/* <About /> */}
      {/* skill section */}

      {/* experience section */}

      {/* project section */}
    </div>
  );
};
