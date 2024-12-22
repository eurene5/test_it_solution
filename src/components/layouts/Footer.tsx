"use client";

import { MouseEvent, useState } from "react";
import Newsletter from "../Home/NewsLetter";
import BackgroundBalls from "../Home/BackgroundBalls";
import FooterContent from "../Home/FooterContent";
import LccFoot from "../Home/LccFoot";

const Footer = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className="relative mb-0 space-y-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-b top-0 from-blue-500 via-blue-400 to-transparent h-2/5 z-[-1]" />
      <BackgroundBalls cursorPosition={cursorPosition} />
      <Newsletter />
      <FooterContent />
      <LccFoot />
    </div>
  );
};

export default Footer;
