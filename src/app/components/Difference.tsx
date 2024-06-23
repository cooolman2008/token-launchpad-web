"use client";

import Image from "next/image";
import shapes from "../../../public/shapes.png";
import { useState, useEffect, useRef } from "react";
import { animate, scroll, ScrollOffset, stagger } from "motion";

export default function Difference() {
	useEffect(() => {
		// let items = document.querySelector("#cont");
		// let item: Element | undefined;
		// console.log(items);
		// if (items === null) {
		// 	item = undefined;
		// } else {
		// 	item = items;
		// }
		// console.log(item);
		// // Animate gallery horizontally during vertical scroll
		// scroll(
		// 	animate("li", {
		// 		transform: ["none", `translateX(-300px)`],
		// 	}),
		// 	{ target: item, offset: ScrollOffset.Enter }
		// );
	}, []);

	return (
		<>
			<section className="w-full flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#89406244] from-70%">
				<div className="container py-10 flex justify-center flex-wrap">
					<h2 className="w-full mb-4 text-2xl font-semibold text-white text-center">
						The SAFU Launcher
						<br />
						Difference
					</h2>
					<ul id="cont" className="flex items-start max-h-fit px-4 overflow-x-scroll">
						<li className="min-w-min mr-8 p-10 rounded-xl bg-[radial-gradient(ellipse_at_80%_80%,_var(--tw-gradient-stops))] from-[#be759a66] to-80% to-[#000000] border border-neutral-800">
							<svg
								width="36"
								height="37"
								viewBox="0 0 36 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="mb-56"
							>
								<g clipPath="url(#clip0_86_1287)">
									<mask
										id="mask0_86_1287"
										style={{ maskType: "luminance" }}
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="36"
										height="37"
									>
										<path d="M0 0.5H36V36.5H0V0.5Z" fill="white" />
									</mask>
									<g mask="url(#mask0_86_1287)">
										<path
											d="M17.922 36.514L17.391 36.278C16.8 36.018 3 29.786 3 18.5V8.71398C3.00064 7.77219 3.29839 6.85461 3.85086 6.09189C4.40333 5.32917 5.18235 4.76019 6.077 4.46598L18 0.513977L29.924 4.46598C30.8185 4.76023 31.5974 5.32925 32.1497 6.09198C32.702 6.85472 32.9996 7.77228 33 8.71398V18.5C33 31.366 19.068 36.133 18.474 36.33L17.922 36.514ZM18 3.65898L7.026 7.29998C6.72791 7.39734 6.46819 7.5864 6.28394 7.84015C6.09968 8.0939 6.00031 8.39938 6 8.71298V18.5C6 26.741 15.66 32.087 18.07 33.292C20.477 32.324 30 27.895 30 18.5V8.71398C30.0003 8.39987 29.9012 8.09372 29.7169 7.83937C29.5326 7.58501 29.2726 7.3955 28.974 7.29798L18 3.65998V3.65898Z"
											fill="#F0F0F0"
										/>
										<path
											d="M16.6671 22.313H16.6171C16.2376 22.3071 15.8631 22.2242 15.5165 22.0696C15.1698 21.9149 14.8581 21.6915 14.6001 21.413L11.1401 17.813L13.3021 15.74L16.6681 19.25L24.4401 11.479L26.5601 13.599L18.6701 21.491C18.4072 21.7537 18.0948 21.9616 17.751 22.1027C17.4072 22.2438 17.0388 22.3153 16.6671 22.313Z"
											fill="#F0F0F0"
										/>
									</g>
								</g>
								<defs>
									<clipPath id="clip0_86_1287">
										<rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
									</clipPath>
								</defs>
							</svg>
							<h2 className="mb-1 text-lg font-medium text-white">Fully On-chain</h2>
							<p className="w-60 text-sm font-normal text-[#B9B9B9]">
								immutable and open-source smart contract deployment.
							</p>
						</li>
						<li className="min-w-min mr-8 p-10 rounded-xl bg-[radial-gradient(ellipse_at_80%_80%,_var(--tw-gradient-stops))] from-[#be759a66] to-80% to-[#000000] border border-neutral-800">
							<svg
								width="36"
								height="37"
								viewBox="0 0 36 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="mb-56"
							>
								<g clipPath="url(#clip0_86_1287)">
									<mask
										id="mask0_86_1287"
										style={{ maskType: "luminance" }}
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="36"
										height="37"
									>
										<path d="M0 0.5H36V36.5H0V0.5Z" fill="white" />
									</mask>
									<g mask="url(#mask0_86_1287)">
										<path
											d="M17.922 36.514L17.391 36.278C16.8 36.018 3 29.786 3 18.5V8.71398C3.00064 7.77219 3.29839 6.85461 3.85086 6.09189C4.40333 5.32917 5.18235 4.76019 6.077 4.46598L18 0.513977L29.924 4.46598C30.8185 4.76023 31.5974 5.32925 32.1497 6.09198C32.702 6.85472 32.9996 7.77228 33 8.71398V18.5C33 31.366 19.068 36.133 18.474 36.33L17.922 36.514ZM18 3.65898L7.026 7.29998C6.72791 7.39734 6.46819 7.5864 6.28394 7.84015C6.09968 8.0939 6.00031 8.39938 6 8.71298V18.5C6 26.741 15.66 32.087 18.07 33.292C20.477 32.324 30 27.895 30 18.5V8.71398C30.0003 8.39987 29.9012 8.09372 29.7169 7.83937C29.5326 7.58501 29.2726 7.3955 28.974 7.29798L18 3.65998V3.65898Z"
											fill="#F0F0F0"
										/>
										<path
											d="M16.6671 22.313H16.6171C16.2376 22.3071 15.8631 22.2242 15.5165 22.0696C15.1698 21.9149 14.8581 21.6915 14.6001 21.413L11.1401 17.813L13.3021 15.74L16.6681 19.25L24.4401 11.479L26.5601 13.599L18.6701 21.491C18.4072 21.7537 18.0948 21.9616 17.751 22.1027C17.4072 22.2438 17.0388 22.3153 16.6671 22.313Z"
											fill="#F0F0F0"
										/>
									</g>
								</g>
								<defs>
									<clipPath id="clip0_86_1287">
										<rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
									</clipPath>
								</defs>
							</svg>
							<h2 className="mb-1 text-lg font-medium text-white">Fully On-chain</h2>
							<p className="w-60 text-sm font-normal text-[#B9B9B9]">
								immutable and open-source smart contract deployment.
							</p>
						</li>
						<li className="min-w-min mr-8 p-10 rounded-xl bg-[radial-gradient(ellipse_at_80%_80%,_var(--tw-gradient-stops))] from-[#be759a66] to-80% to-[#000000] border border-neutral-800">
							<svg
								width="36"
								height="37"
								viewBox="0 0 36 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="mb-56"
							>
								<g clipPath="url(#clip0_86_1287)">
									<mask
										id="mask0_86_1287"
										style={{ maskType: "luminance" }}
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="36"
										height="37"
									>
										<path d="M0 0.5H36V36.5H0V0.5Z" fill="white" />
									</mask>
									<g mask="url(#mask0_86_1287)">
										<path
											d="M17.922 36.514L17.391 36.278C16.8 36.018 3 29.786 3 18.5V8.71398C3.00064 7.77219 3.29839 6.85461 3.85086 6.09189C4.40333 5.32917 5.18235 4.76019 6.077 4.46598L18 0.513977L29.924 4.46598C30.8185 4.76023 31.5974 5.32925 32.1497 6.09198C32.702 6.85472 32.9996 7.77228 33 8.71398V18.5C33 31.366 19.068 36.133 18.474 36.33L17.922 36.514ZM18 3.65898L7.026 7.29998C6.72791 7.39734 6.46819 7.5864 6.28394 7.84015C6.09968 8.0939 6.00031 8.39938 6 8.71298V18.5C6 26.741 15.66 32.087 18.07 33.292C20.477 32.324 30 27.895 30 18.5V8.71398C30.0003 8.39987 29.9012 8.09372 29.7169 7.83937C29.5326 7.58501 29.2726 7.3955 28.974 7.29798L18 3.65998V3.65898Z"
											fill="#F0F0F0"
										/>
										<path
											d="M16.6671 22.313H16.6171C16.2376 22.3071 15.8631 22.2242 15.5165 22.0696C15.1698 21.9149 14.8581 21.6915 14.6001 21.413L11.1401 17.813L13.3021 15.74L16.6681 19.25L24.4401 11.479L26.5601 13.599L18.6701 21.491C18.4072 21.7537 18.0948 21.9616 17.751 22.1027C17.4072 22.2438 17.0388 22.3153 16.6671 22.313Z"
											fill="#F0F0F0"
										/>
									</g>
								</g>
								<defs>
									<clipPath id="clip0_86_1287">
										<rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
									</clipPath>
								</defs>
							</svg>
							<h2 className="mb-1 text-lg font-medium text-white">Fully On-chain</h2>
							<p className="w-60 text-sm font-normal text-[#B9B9B9]">
								immutable and open-source smart contract deployment.
							</p>
						</li>
						<li className="min-w-min mr-8 p-10 rounded-xl bg-[radial-gradient(ellipse_at_80%_80%,_var(--tw-gradient-stops))] from-[#be759a66] to-80% to-[#000000] border border-neutral-800">
							<svg
								width="36"
								height="37"
								viewBox="0 0 36 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="mb-56"
							>
								<g clipPath="url(#clip0_86_1287)">
									<mask
										id="mask0_86_1287"
										style={{ maskType: "luminance" }}
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="36"
										height="37"
									>
										<path d="M0 0.5H36V36.5H0V0.5Z" fill="white" />
									</mask>
									<g mask="url(#mask0_86_1287)">
										<path
											d="M17.922 36.514L17.391 36.278C16.8 36.018 3 29.786 3 18.5V8.71398C3.00064 7.77219 3.29839 6.85461 3.85086 6.09189C4.40333 5.32917 5.18235 4.76019 6.077 4.46598L18 0.513977L29.924 4.46598C30.8185 4.76023 31.5974 5.32925 32.1497 6.09198C32.702 6.85472 32.9996 7.77228 33 8.71398V18.5C33 31.366 19.068 36.133 18.474 36.33L17.922 36.514ZM18 3.65898L7.026 7.29998C6.72791 7.39734 6.46819 7.5864 6.28394 7.84015C6.09968 8.0939 6.00031 8.39938 6 8.71298V18.5C6 26.741 15.66 32.087 18.07 33.292C20.477 32.324 30 27.895 30 18.5V8.71398C30.0003 8.39987 29.9012 8.09372 29.7169 7.83937C29.5326 7.58501 29.2726 7.3955 28.974 7.29798L18 3.65998V3.65898Z"
											fill="#F0F0F0"
										/>
										<path
											d="M16.6671 22.313H16.6171C16.2376 22.3071 15.8631 22.2242 15.5165 22.0696C15.1698 21.9149 14.8581 21.6915 14.6001 21.413L11.1401 17.813L13.3021 15.74L16.6681 19.25L24.4401 11.479L26.5601 13.599L18.6701 21.491C18.4072 21.7537 18.0948 21.9616 17.751 22.1027C17.4072 22.2438 17.0388 22.3153 16.6671 22.313Z"
											fill="#F0F0F0"
										/>
									</g>
								</g>
								<defs>
									<clipPath id="clip0_86_1287">
										<rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
									</clipPath>
								</defs>
							</svg>
							<h2 className="mb-1 text-lg font-medium text-white">Fully On-chain</h2>
							<p className="w-60 text-sm font-normal text-[#B9B9B9]">
								immutable and open-source smart contract deployment.
							</p>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}
