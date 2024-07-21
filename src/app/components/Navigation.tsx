"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/safu.svg";
import { animate, spring, stagger } from "motion";
import Links from "./Navigation/Links";

function Navigation() {
	const [isClient, setIsClient] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			animate(
				".down",
				{ y: [-35, 0], opacity: [0, 1] },
				{
					easing: spring({ stiffness: 300, damping: 16, mass: 1 }),
					delay: stagger(0.3, { start: 0.5 }),
					duration: 0.5,
				}
			);
		}
	}, [isClient]);

	const handleClickOutside = (event: MouseEvent | TouchEvent) => {
		const wrapper = wrapperRef.current;
		if (wrapper instanceof HTMLElement && !wrapper.contains(event.target as Node)) {
			animate("#menu", { x: [0] }, { easing: spring({ stiffness: 300, damping: 18, mass: 0.4 }) });
			document.removeEventListener("mouseup", handleClickOutside);
			document.removeEventListener("touchend", handleClickOutside);
		}
	};

	return (
		<>
			{isClient && (
				<nav className="w-full flex px-5 2xl:px-12 py-4 lg:py-7 2xl:py-10 fixed z-10 down">
					<Link href={"#intro"} className="lg:ml-4">
						<Image id="box" src={logo} className="w-auto h-8 2xl:h-12" alt="SAFU Launcher Logo" />
					</Link>
					<div
						className="menu-button w-10 h-10 rounded-full flex flex-col items-center justify-center ml-auto lg:hidden"
						onClick={() => {
							animate("#menu", { x: [-288] }, { easing: spring({ stiffness: 300, damping: 18, mass: 0.4 }) });
							document.addEventListener("mouseup", handleClickOutside);
							document.addEventListener("touchend", handleClickOutside);
						}}
					>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div id="menu" className="menu flex items-center justify-center" ref={wrapperRef}>
						<div className="flex flex-col text-xl font-normal text-slate-200">
							<Links type={2} />
							<a href="https://app.safulauncher.com" className="mx-auto flex justify-center lg:hidden" target="_blank">
								<button className="safu-button-pop">Explore App</button>
							</a>
						</div>
					</div>
					<div className="hidden lg:flex justify-start text-gray-400 text-sm 2xl:text-base font-normal pl-10 2xl:pl-16">
						<Links type={1} />
					</div>
					<a href="https://app.safulauncher.com" className="max-lg:hidden ml-auto flex items-center" target="_blank">
						<button className="safu-button-pop">Explore App</button>
					</a>
				</nav>
			)}
		</>
	);
}
export default Navigation;
