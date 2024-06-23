"use client";

import Image from "next/image";
import governance from "../../../public/governance.png";
import { useState, useEffect } from "react";
import { animate, spring, inView, stagger } from "motion";

export default function Governance() {
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
			<section className="w-full flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7161EF55] from-20%">
				<div className="container p-10 flex justify-center flex-wrap">
					<div className="w-full flex justify-center mb-12">
						<Image
							id="box"
							src={governance}
							className="w-full h-auto ups mix-blend-color-dodge"
							alt="SAFU Launcher Logo"
						/>
					</div>
					<h2 className="mb-10 text-4xl font-semibold text-white text-center ups">Governance</h2>
					<p className="mb-8 text-sm font-normal text-center text-[#B9B9B9] ups">
						Introduction to SAFU DAO and its role in contract decision-making, treasury allocation, and conflict
						resolution. Highlight the use of SAFUscore in governance.
					</p>
				</div>
			</section>
		</>
	);
}
