import React, { useState } from "react";

interface SparkleProps {
  children: React.ReactNode;
}

interface SparkleItem {
  id: number;
  x: number;
  y: number;
}

const Sparkle: React.FC<SparkleProps> = ({ children }) => {
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const createSparkle = () => {
    const newSparkle: SparkleItem = {
      id: Date.now(),
      x: position.x + Math.random() * 20 - 10,
      y: position.y + Math.random() * 20 - 10,
    };
    setSparkles((prev) => [...prev, newSparkle]);

    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 800);
  };

  return (
    <div style={{ position: "relative" }} onMouseMove={handleMouseMove} onClick={createSparkle}>
      {children}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            position: "absolute",
            left: sparkle.x,
            top: sparkle.y,
            fontSize: "1.5rem",
            pointerEvents: "none",
            opacity: 0.8,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
};

export default Sparkle;
