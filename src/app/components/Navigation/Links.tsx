"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Links() {
	return (
		<>
			<Link href={"/"} className="self-center max-lg:mb-4 lg:pr-8" scroll={true}>
				<span>Home</span>
			</Link>
			<Link href={"/launch"} className="self-center max-lg:mb-4 lg:pr-8" scroll={true}>
				<span className="">Features</span>
			</Link>
			<Link href={"/launch"} className="self-center max-lg:mb-4 lg:pr-8" scroll={true}>
				<span className="">Tokenomics</span>
			</Link>
			<Link href={"/launch"} className="self-center max-lg:mb-4 lg:pr-8" scroll={true}>
				<span className="">Governance</span>
			</Link>
			<Link href={"/launch"} className="self-center max-lg:mb-4 lg:pr-8" scroll={true}>
				<span className="">Community</span>
			</Link>
			<Link href={"/launch"} className="self-center max-lg:mb-4 lg:pr-8" scroll={true}>
				<span className="">Roadmap</span>
			</Link>
		</>
	);
}
export default Links;
