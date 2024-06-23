"use client";

import Image from "next/image";
import logo from "../../../public/safu.svg";
import { useState, useEffect } from "react";
import { animate, spring, inView, stagger } from "motion";
import Links from "./Navigation/Links";
import Link from "next/link";

export default function Footer() {
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
			<footer className="w-full flex flex-col items-center py-16">
				<Link href={"/"} className="mb-12" scroll={true}>
					<Image id="box" src={logo} className="w-auto h-10" alt="SAFU Launcher Logo" />
				</Link>
				<div className="flex flex-col font-medium text-[#B9B9B9] mb-20">
					<Links />
				</div>
				<p className=" text-[#B9B9B9] mb-12">© 2024 All rights reserved.</p>
			</footer>
		</>
	);
}
