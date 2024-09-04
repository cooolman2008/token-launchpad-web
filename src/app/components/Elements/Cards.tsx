"use client";

import Image from "next/image";
import lock from "../../../../public/lock.svg";
import cube from "../../../../public/cube.svg";
import access from "../../../../public/access.svg";
import premium from "../../../../public/premium.svg";
import high from "../../../../public/high.svg";
import diverse from "../../../../public/diverse.svg";
import chain from "../../../../public/chains.svg";
import success from "../../../../public/success.svg";
import funds from "../../../../public/funds.svg";
import zero from "../../../../public/zero.svg";
import balance from "../../../../public/balance.svg";
import low from "../../../../public/low.svg";
import { useEffect, useState } from "react";
import { animate, inView, stagger } from "motion";

export default function Cards({ name, desc, type }: { name: string; desc: string; type: number }) {
	const [pic, setPic] = useState(chain);

	useEffect(() => {
		switch (type) {
			case 1:
				setPic(cube);
				break;
			case 2:
				setPic(access);
				break;
			case 3:
				setPic(premium);
				break;
			case 4:
				setPic(high);
				break;
			case 5:
				setPic(diverse);
				break;
			case 6:
				setPic(chain);
				break;
			case 7:
				setPic(success);
				break;
			case 8:
				setPic(funds);
				break;
			case 9:
				setPic(zero);
				break;
			case 10:
				setPic(balance);
				break;
			case 11:
				setPic(low);
				break;
			default:
				setPic(lock);
		}
		inView(".pop-in", (event) => {
			const ele = event.target.getElementsByTagName("h2")[0];
			const ele2 = event.target.getElementsByTagName("p")[0];
			if (ele && ele2) {
				animate(
					[ele, ele2],
					{ y: [15, 0], opacity: [0, 1] },
					{
						easing: "ease-in-out",
						duration: 0.5,
						delay: stagger(0.2, { start: 0.5 }),
					}
				);
			}
		});
	}, []);
	return (
		<>
			<div
				className={"basis-full lg:basis-1/3 flex flex-col max-lg:mb-16 lg:mb-20 border-slate-200/30 mx-auto pop-in "}
			>
				<div className="xl:pr-6 flex items-end mb-2">
					<Image
						height={70}
						id="box"
						src={pic}
						className="rounded-lg pop mr-8" // lg:shadow-[10px_20px_200px_#29abe236]  bg-gradient-to-br from-neutral-800 to-black w-full md:w-96 2xl:w-96 h-auto py-4 px-10 lg:px-16 2xl:px-0 2xl:py-0
						alt="SAFU Launcher Logo"
					/>
					<h2 className="text-3xl/tight font-semibold safu-grad-text">{name}</h2>
				</div>
				<p className="max-sm:w-80 max-lg:w-96 max-lg:mx-auto w-4/5 text-base lg:text-lg font-thin text-gray-400">
					{desc}
				</p>
			</div>
		</>
	);
}
