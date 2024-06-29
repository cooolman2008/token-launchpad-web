"use client";

import Image from "next/image";
import logo from "../../../public/safu_white.svg";
import { useState, useEffect } from "react";
import { animate, spring, inView, stagger } from "motion";
import Links from "./Navigation/Links";
import Link from "next/link";

export default function Footer() {
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
				<footer className="w-full flex flex-col items-center pt-16 pb-8 bg-gradient-to-r from-blue-950/30">
					<Link href={"/"} className="mb-12" scroll={true}>
						<Image id="box" src={logo} className="w-auto h-16" alt="SAFU Launcher Logo" />
					</Link>
					<div className="flex max-md:flex-col text-xl font-light text-gray-400 mb-12">
						<Links type={3} />
					</div>
					<p className=" text-gray-400">© 2024 All rights reserved.</p>
				</footer>
			)}
		</>
	);
}
