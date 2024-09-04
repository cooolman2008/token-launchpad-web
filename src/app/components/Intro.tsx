"use client";

import { useState, useEffect } from "react";
import { animate, spring, stagger } from "motion";
import Telegram from "./Elements/Telegram";
import Twitter from "./Elements/Twitter";

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
				{ easing: spring({ stiffness: 300, damping: 16, mass: 1 }), delay: stagger(0.3, { start: 0.5 }) }
			);
		}
	}, [show]);

	return (
		<>
			{show && (
				<section id="intro" className="w-full min-h-screen text-center flex flex-col items-center justify-center">
					<div className="container flex flex-col">
						<div className="relative flex flex-col items-center justify-center">
							<div className="dash-vertical py-[120px]">
								<h1 className="py-4 xl:py-8 text-4xl sm:text-5xl lg:text-8xl font-black safu-title-grad-text ups">
									IDEAS TO IDOs
								</h1>
								<div className="px-8">
									<p className="text-sm lg:text-2xl lg:leading-9 text-zinc-400 font-light ups mb-8">
										Build, launch and earn on the most secure and completely
										<br /> decentralised crypto launchpad
									</p>
									<div className=" w-full flex justify-center ups">
										<div className="flex flex-col mr-4">
											<a href="https://app.safulauncher.com" className="mx-auto flex justify-center">
												<button className="safu-button-primary">Explore App</button>
											</a>
										</div>
										<Telegram url="" />
										<Twitter url="" />
									</div>
								</div>
							</div>
							<div className="absolute dash-horizontal px-[763px] py-[64px] bottom-[260px]"></div>
						</div>
					</div>
					<div className="flex justify-center"></div>
				</section>
			)}
		</>
	);
}
