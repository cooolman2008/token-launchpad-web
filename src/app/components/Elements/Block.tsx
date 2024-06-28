"use client";

import Image from "next/image";
import verse from "../../../../public/verse.jpg";
import ai from "../../../../public/ai.png";
import game from "../../../../public/game.png";
import { useState, useEffect } from "react";

export default function Block({ name, desc, type }: { name: string; desc: string; type: number }) {
	const [pic, setPic] = useState(ai);

	useEffect(() => {
		switch (type) {
			case 1:
				setPic(ai);
				break;
			case 2:
				setPic(game);
				break;
			default:
				setPic(verse);
		}
	}, []);
	return (
		<div
			className={
				"max-xl:w-full flex max-lg:flex-col items-center mb-16 lg:mb-24 max-lg:text-center overflow-hidden border-slate-200/30 lg:mx-auto " +
				((type === 2 || type === 4) && "lg:flex-row-reverse")
			}
		>
			<div className="w-full md:w-2/3 lg:w-5/12  xl:px-6">
				<Image
					id="box"
					src={pic}
					className="w-full h-auto rounded-xl overflow-hidden border border-gray-400/40" // lg:shadow-[10px_20px_200px_#29abe236]  bg-gradient-to-br from-neutral-800 to-black
					alt="SAFU Launcher Logo"
				/>
			</div>
			<div
				className={"max-lg:pt-6 max-lg:pb-16 lg:grow basis-0 " + (type === 2 || type === 4 ? "lg:pr-20" : "lg:pl-20")}
			>
				<h2 className="text-4xl md:text-5xl/tight font-semibold mb-2 bg-gradient-to-t from-slate-200/80 to-slate-200 safu-grad-text-white">
					{name}
				</h2>
				<p className="md:w-96 lg:w-auto text-base/relaxed xl:text-lg font-normal text-gray-400">{desc}</p>
			</div>
		</div>
	);
}
