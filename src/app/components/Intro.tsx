"use client";

import logo from "../../../public/safu.svg";
import { useState, useEffect } from "react";
import { animate, spring, stagger } from "motion";

export default function Intro() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	useEffect(() => {
		if (show) {
			const delay = window.innerWidth > 1024 ? 3 : 3;
			animate(
				".ups",
				{ y: [0, -15], opacity: [0, 1] },
				{ easing: spring({ stiffness: 300, damping: 16, mass: 1 }), delay: stagger(0.3, { start: delay }) }
			);
		}
	}, [show]);

	return (
		<>
			{show && (
				<section className="w-full text-center lg:min-h-screen relative px-10 overflow-hidden bg-gradient-to-t from-blue-950/30">
					<video
						className="w-screen object-cover absolute left-0 right-0 top-0 bottom-0 -z-1"
						autoPlay={true}
						loop={false}
						muted={true}
					>
						<source src="/video.mp4" type="video/mp4" />
					</video>
					<div className="h-10 md:h-24 lg:h-44 2xl:h-96 2xl:mb-24"></div>
					<div className="flex justify-center">
						<h1 className="mt-40 lg:mt-80 2xl:mt-96 mb-4 2xl:mb-8 text-5xl lg:text-8xl font-black safu-grad-text ups">
							IDEAS TO IDOs
						</h1>
					</div>
					<p className="text-sm lg:text-2xl lg:leading-9 text-gray-400 font-light ups mb-8">
						SAFU Launcher is an inventive, decentralised, fully on-chain platform for projects to launch ideas
						<br className="lg:hidden" />
						and for investors to tap into opportunities
					</p>
					<div className=" w-full flex justify-center ups">
						<div className="flex flex-wrap gap-4">
							<a href="www.google.com" className="mx-auto flex justify-center">
								<button className="safu-button-pops">Buy NFTs</button>
							</a>
							<a href="www.google.com" className="mx-auto flex justify-center">
								<button className="safu-button-mid">Buy $SAFU</button>
							</a>
							<a href="www.google.com" className="mx-auto flex justify-center lg:hidden">
								<button className="safu-button-primary">Explore App</button>
							</a>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
