"use client";

import { useState, useEffect } from "react";
import Cards from "./Elements/Cards";
import { animate, inView, spring } from "motion";
import Collapse from "./Elements/Collapse";

export default function FAQ() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<>
			{show && (
				<section id="faq" className="bg-gradient-to-r from-blue-950/30 z-10 relative">
					<div className="container mx-auto px-10 pt-28 pb-14 flex flex-col justify-center flex-wrap">
						<h1 className="text-4xl/tight lg:text-6xl/tight font-black text-center pop bg-gradient-to-t from-slate-200/80 to-slate-200 safu-grad-text-white pop">
							Frequently Asked Questions
						</h1>
						<div className="w-full  pt-12 lg:pt-20">
							<Collapse name="What is SAFU Launcher?" type={1} />
							<Collapse name="What makes SAFU Launcher better than competitors?" type={2} />
							<Collapse
								name="How does SAFU Launcher secure projects and investors from scams and rug pulls?"
								type={3}
							/>
							<Collapse name="How much does it cost to launch a project on SAFU?" type={4} />
							<Collapse name="What networks does SAFU Launcher support?" type={5} />
						</div>
					</div>
				</section>
			)}
		</>
	);
}
