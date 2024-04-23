"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { animate, spring, stagger } from "motion";
import Canvas from "./Canvas";

export default function Launch() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    animate(
      ".box",
      { scale: [0.1, 1], opacity: [0.25, 1] },
      {
        delay: 2,
        easing: spring(),
      }
    );
    setIsClient(true);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
        className="flex items-center justify-center flex-col"
      >
        <Image
          className="box"
          src="/safu.svg"
          alt="SAFU Logo"
          width={100}
          height={24}
          style={{
            opacity: 0,
          }}
          priority
        />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "5%",
          left: 0,
          right: 0,
          zIndex: 2,
        }}
        className="flex items-center justify-center flex-col"
      >
        <h1 className="mt-48 text-2xl lg:text-7xl font-thin">LAUNCHING SOON</h1>
      </div>
      <Canvas />
    </>
  );
}
