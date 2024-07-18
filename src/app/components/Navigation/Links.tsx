"use client";

import Link from "next/link";

function Links({ type }: { type: number }) {
	const linkClass =
		"hover:text-slate-200 self-center " + (type === 3 ? "max-lg:mb-4 md:pr-4" : " max-lg:mb-10 lg:pr-8");
	return (
		<>
			<Link href={"/#features"} className={linkClass}>
				<span>Features</span>
			</Link>
			<a href="#tokenomics" className={linkClass}>
				<span className="">Tokenomics</span>
			</a>
			<a href="https://safuapp.gitbook.io/safu-launcher" className={linkClass} target="_blank">
				<span className="">Docs</span>
			</a>
			<a href="Safu Launcher whitepaper.pdf" className={linkClass} target="_blank">
				<span className="">Whitepaper</span>
			</a>
		</>
	);
}
export default Links;
