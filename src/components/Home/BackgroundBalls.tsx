"use client";
import { motion } from "framer-motion";

const BackgroundBalls = ({
  cursorPosition,
}: Readonly<{ cursorPosition: { x: number; y: number } }>) => {
  const numBalls = 10;
  const balls = new Array(numBalls).fill(null).map((_, index) => ({
    id: index,
    size: 50 + 80,
    opacity: 0.3 + 0.2,
    xOffset: 30 - 120,
    yOffset: 30 - 120,
    color: index % 2 === 0 ? "bg-white" : "bg-blue-400",
  }));

  return (
    <div className="absolute inset-0 bottom-0 h-3/5 z-[-1]">
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className={`absolute ${ball.color} opacity-${Math.round(
            ball.opacity * 100
          )} blur-3xl rounded-full`}
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            x: cursorPosition.x + ball.xOffset - ball.size / 2,
            y: cursorPosition.y + ball.yOffset - ball.size / 2,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      ))}
    </div>
  );
};

export default BackgroundBalls;
