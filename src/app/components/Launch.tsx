"use client";

import { animate, spring } from "motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../../public/speedyweb_wordmark.svg";
import Canvas from "./Canvas";

export default function Launch() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		animate(
			".box",
			{ scale: [0.1, 1], opacity: [0.1, 1] },
			{
				delay: 2,
				easing: spring(),
			}
		);
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
					className="box w-1/4"
					src={logo}
					alt="SpeedyWeb Logo"
					style={{
						opacity: 0,
					}}
					priority
				/>
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
				<h1 className="mt-48 text-2xl lg:text-7xl font-thin">LAUNCHING SOON</h1>
			</div>
			<Canvas />
		</>
	);
}
