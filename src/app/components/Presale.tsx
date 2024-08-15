"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/safu.svg";
import { animate, spring, stagger } from "motion";
import Links from "./Navigation/Links";

function Presale() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	//

	return (
		<>
			{isClient && (
				<div className="w-full flex justify-center text-center py-2 bg-gradient-to-r from-[#fbb789] via-60% via-pink-500 to-[140%] to-blue-600 border-b border-neutral-800 z-30 fixed bottom-0">
					<p className="text-3xl text-neutral-950 font-normal italic">
						<b className="text-3xl font-black mr-4">PRESALE</b> Starts on 20TH August
					</p>
				</div>
			)}
		</>
	);
}
export default Presale;
