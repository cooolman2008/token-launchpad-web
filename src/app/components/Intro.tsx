"use client";

import { useState, useEffect } from "react";
import { animate, spring, stagger } from "motion";

export default function Intro() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	useEffect(() => {
		if (show) {
			animate(
				".ups",
				{ y: [15, 0], opacity: [0, 1] },
				{ easing: spring({ stiffness: 300, damping: 16, mass: 1 }), delay: stagger(0.3, { start: 3 }) }
			);
		}
	}, [show]);

	return (
		<>
			{show && (
				<section
					id="intro"
					className="w-full text-center lg:min-h-[56.25vw] relative px-10 overflow-hidden bg-gradient-to-r from-blue-950/30"
				>
					<video
						className="w-screen object-cover absolute left-0 right-0 top-0 bottom-0 -z-1"
						autoPlay={true}
						loop={false}
						muted={true}
					>
						<source src="/video.mp4" type="video/mp4" />
					</video>
					<div className="h-[34vw]"></div>
					<div className="flex justify-center">
						<h1 className="mb-4 2xl:mb-8 text-4xl sm:text-5xl lg:text-8xl font-black safu-grad-text ups">
							IDEAS TO IDOs
						</h1>
					</div>
					<p className="text-sm lg:text-2xl lg:leading-9 text-gray-400 font-light ups mb-8">
						SAFU Launcher is a decentralised, fully on-chain platform for projects to launch
						<br /> ideas and for investors to tap into opportunities
					</p>
					<div className=" w-full flex justify-center ups">
						<div className="flex flex-wrap gap-4">
							<a href="www.google.com" className="mx-auto flex justify-center">
								<button className="safu-button-pops">Buy NFTs</button>
							</a>
							<a href="www.google.com" className="mx-auto flex justify-center">
								<button className="safu-button-primary">Buy $SAFU</button>
							</a>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
