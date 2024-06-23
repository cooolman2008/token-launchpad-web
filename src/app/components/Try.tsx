"use client";

import Image from "next/image";
import governance from "../../../public/governance.png";
import { useState, useEffect } from "react";
import { animate, spring, inView, stagger } from "motion";

export default function Try() {
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
			<section className="w-full flex justify-center bg-white/10">
				<div className="container p-10 flex justify-center flex-wrap">
					<h2 className="mt-12 mb-8 text-4xl font-semibold text-white text-center ups">Try SAFU Launcher Now!</h2>
					<p className="mb-2 text-sm font-normal text-center text-[#B9B9B9] ups">
						Simplifying the safe and successful launch of ERC20 tokens fully on-chain.
					</p>
					<p className="mb-8 text-sm font-normal text-center text-[#B9B9B9] ups">
						Launch Your Project in 60 Seconds with SAFU Launcher
					</p>
					<div className="flex items-center px-6 py-2 mb-12 rounded-full bg-gradient-to-l from-[#3E89C9] to-[#ED2881]">
						<span className="mr-2 font-medium">Launch you Token</span>
						<svg
							width="13"
							height="14"
							viewBox="0 0 13 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="fill-white"
						>
							<path d="M8.1875 2.73001C8.075 2.77251 8 2.88001 8 3.00001C8 3.12001 8.075 3.22751 8.1875 3.27001L9.6 3.80001L10.13 5.21251C10.1725 5.32501 10.28 5.40001 10.4 5.40001C10.52 5.40001 10.6275 5.32501 10.67 5.21251L11.2 3.80001L12.6125 3.27001C12.725 3.22751 12.8 3.12001 12.8 3.00001C12.8 2.88001 12.725 2.77251 12.6125 2.73001L11.2 2.20001L10.67 0.787506C10.6275 0.675006 10.52 0.600006 10.4 0.600006C10.28 0.600006 10.1725 0.675006 10.13 0.787506L9.6 2.20001L8.1875 2.73001ZM5.1275 2.43251C5.0625 2.29001 4.92 2.20001 4.765 2.20001C4.61 2.20001 4.4675 2.29001 4.4025 2.43251L3.0825 5.28251L0.2325 6.60001C0.09 6.66501 0 6.80751 0 6.96501C0 7.12251 0.09 7.26251 0.2325 7.32751L3.085 8.64501L4.4 11.495C4.465 11.6375 4.6075 11.7275 4.7625 11.7275C4.9175 11.7275 5.06 11.6375 5.125 11.495L6.4425 8.64251L9.295 7.32501C9.4375 7.26001 9.5275 7.11751 9.5275 6.96251C9.5275 6.80751 9.4375 6.66501 9.295 6.60001L6.445 5.28501L5.1275 2.43251ZM9.6 10.2L8.1875 10.73C8.075 10.7725 8 10.88 8 11C8 11.12 8.075 11.2275 8.1875 11.27L9.6 11.8L10.13 13.2125C10.1725 13.325 10.28 13.4 10.4 13.4C10.52 13.4 10.6275 13.325 10.67 13.2125L11.2 11.8L12.6125 11.27C12.725 11.2275 12.8 11.12 12.8 11C12.8 10.88 12.725 10.7725 12.6125 10.73L11.2 10.2L10.67 8.78751C10.6275 8.67501 10.52 8.60001 10.4 8.60001C10.28 8.60001 10.1725 8.67501 10.13 8.78751L9.6 10.2Z" />
						</svg>
					</div>
				</div>
			</section>
		</>
	);
}
