"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { animate, spring, stagger } from "motion";

const vec3 = require("gl-vec3");

export default function Canvas() {
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
    let canvas = document.getElementById("canvas");
    let flr = Math.floor;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let halfw = canvas.width / 2,
      halfh = canvas.height / 2,
      step = 2,
      warpZ = 12,
      speed = 0.075;
    let stampedDate = new Date();

    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function rnd(num1, num2) {
      return flr(Math.random() * num2 * 2) + num1;
    }

    function getColor() {
      return "hsla(" + rnd(150, 200) + ",100%, " + rnd(50, 100) + "%, 1)";
    }

    let star = function () {
      let v = vec3.fromValues(
        rnd(0 - halfw, halfw),
        rnd(0 - halfh, halfh),
        rnd(1, warpZ)
      );

      this.x = v[0];
      this.y = v[1];
      this.z = v[2];
      this.color = getColor();

      this.reset = function () {
        v = vec3.fromValues(
          rnd(0 - halfw, halfw),
          rnd(0 - halfh, halfh),
          rnd(1, warpZ)
        );

        this.x = v[0];
        this.y = v[1];
        this.color = getColor();
        vel = this.calcVel();
      };

      this.calcVel = function () {
        return vec3.fromValues(0, 0, 0 - speed);
      };

      let vel = this.calcVel();

      this.draw = function () {
        vel = this.calcVel();
        v = vec3.add(vec3.create(), v, vel);
        let x = v[0] / v[2];
        let y = v[1] / v[2];
        let x2 = v[0] / (v[2] + speed * 0.5);
        let y2 = v[1] / (v[2] + speed * 0.5);

        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        if (x < 0 - halfw || x > halfw || y < 0 - halfh || y > halfh) {
          this.reset();
        }
      };
    };

    let starfield = function () {
      let numOfStars = 250;

      let stars = [];

      function _init() {
        for (let i = 0, len = numOfStars; i < len; i++) {
          stars.push(new star());
        }
      }

      _init();

      this.draw = function () {
        ctx.translate(halfw, halfh);

        for (let i = 0, len = stars.length; i < len; i++) {
          let currentStar = stars[i];

          currentStar.draw();
        }
      };
    };

    let mStarField = new starfield();

    function draw() {
      // make 5 seconds
      let millSeconds = 1000 * 10;

      let currentTime = new Date();

      speed = 0.025;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      mStarField.draw();

      window.requestAnimationFrame(draw);
    }

    draw();

    window.onresize = function () {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      halfw = canvas.width / 2;
      halfh = canvas.height / 2;
    };
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
          src="/safu.png"
          alt="SAFU Logo"
          // className="dark:invert"
          width={100}
          height={24}
          priority
        />
        {/* <div className="box">
          <h1 className="box mt-12 text-9xl font-black">SAFU</h1>
          <h1 className="box text-7xl font-black">Launcher</h1>
        </div> */}
        {/* <h1 className="mt-48 text-7xl font-thin border-x-4 border-white">
          [ LAUNCHING SOON ]
        </h1> */}
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
        <h1 className="mt-48 text-2xl lg:text-7xl font-thin border-x-4 border-white">
          [ LAUNCHING SOON ]
        </h1>
      </div>
      <canvas id="canvas"></canvas>
    </>
  );
}
