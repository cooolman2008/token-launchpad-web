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
				<section id="intro" className="w-full min-h-screen text-center flex flex-col items-center justify-center z-10">
					<div className="container flex flex-col">
						<div className="relative flex flex-col items-center justify-center">
							<div className="md:dash-vertical md:py-[120px]">
								<h1 className="px-4 py-4 xl:py-8 text-4xl sm:text-5xl lg:text-8xl font-black safu-title-grad-text ups">
									IDEAS TO IDOs
								</h1>
								<div className="px-8">
									<p className="text-sm lg:text-2xl lg:leading-9 text-zinc-400 font-light ups mb-8">
										Build, launch and earn on the most secure and
										<br className="xl:hidden max-md:hidden" /> completely
										<br className="max-xl:hidden" /> decentralised crypto launchpad
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
							<div className="z-0 max-md:hidden absolute dash-horizontal px-[300px] lg:px-[504px] 2xl:px-[763px] py-[64px] bottom-[170px] lg:bottom-[250px] xl:bottom-[265px]"></div>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
