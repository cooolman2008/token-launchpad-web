"use client";

import Image from "next/image";
import chain from "../../../../public/fullyonchain.png";
import stack from "../../../../public/staking.png";
import liqlock from "../../../../public/lock.png";
import token from "../../../../public/tokenomics.png";
import { useEffect, useState } from "react";

export default function Cards({ name, desc, type }: { name: string; desc: string; type: number }) {
	const [pic, setPic] = useState(chain);

	useEffect(() => {
		switch (type) {
			case 1:
				setPic(chain);
				break;
			case 2:
				setPic(stack);
				break;
			case 3:
				setPic(liqlock);
				break;
			default:
				setPic(token);
		}
	}, []);
	return (
		<>
			<div
				className={
					"basis-full lg:basis-1/2 flex max-2xl:flex-col items-center max-lg:mb-16 lg:mb-20 max-2xl:text-center overflow-hidden border-slate-200/30 mx-auto pop "
				}
			>
				<div className="w-3/5 md:w-1/3 lg:w-1/2 2xl:w-4/5 xl:px-6">
					<Image
						id="box"
						src={pic}
						className="rounded-lg" // lg:shadow-[10px_20px_200px_#29abe236]  bg-gradient-to-br from-neutral-800 to-black w-full md:w-96 2xl:w-96 h-auto py-4 px-10 lg:px-16 2xl:px-0 2xl:py-0
						alt="SAFU Launcher Logo"
					/>
				</div>
				<div className="pt-6 pb-8 lg:px-10">
					<h2 className="text-3xl/tight font-semibold mb-2 bg-gradient-to-t from-slate-200/80 to-slate-200 safu-grad-text-white">
						{name}
					</h2>
					<p className="max-sm:w-80 max-lg:w-96 max-lg:mx-auto text-md lg:text-lg font-thin text-gray-400">{desc}</p>
				</div>
			</div>
		</>
	);
}
