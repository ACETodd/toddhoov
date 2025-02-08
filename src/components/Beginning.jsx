import { TypeAnimation } from "react-type-animation";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-black text-center font-[family-name:var(--font-geist-mono)]">
        <TypeAnimation
          sequence={["What are you doing here..?", 500]}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
