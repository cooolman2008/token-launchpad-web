"use client";

import Image from "next/image";
import shapes from "../../../public/shapes.png";
import { useState, useEffect } from "react";
import { animate, spring, inView, stagger } from "motion";

export default function Intro() {
	useEffect(() => {
		inView(".ups", (event) => {
			animate(
				event.target,
				{ y: [0, -15], opacity: [0, 1] },
				{ easing: spring({ stiffness: 300, damping: 16, mass: 1 }), delay: stagger(0.3, { start: 0.2 }) }
			);
		});
	}, []);

	return (
		<>
			<section className="w-full flex justify-center bg-gradient-to-r from-[#98A8FF33] from-30% to-[180%] to-[#000000]">
				<div className="container p-10 flex justify-center flex-wrap">
					<div className="w-full flex justify-center mb-12">
						<Image id="box" src={shapes} className="w-full h-auto ups" alt="SAFU Launcher Logo" />
					</div>
					<h2 className="mb-4 text-2xl font-semibold text-white text-center ups">
						Introducing SAFU
						<br />
						Launcher
					</h2>
					<p className="mb-12 text-sm font-normal text-center text-[#B9B9B9] ups">
						Description of the current ERC20 token market and the challenges it faces. Introduce how SAFU Launcher
						addresses these challenges with a fully on-chain approach and advanced features to improve security,
						transparency, and efficiency.
					</p>
				</div>
			</section>
		</>
	);
}
