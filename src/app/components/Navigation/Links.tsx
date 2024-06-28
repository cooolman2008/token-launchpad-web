"use client";

import Link from "next/link";

function Links({ isFooter }: { isFooter?: boolean }) {
	const linkClass = "hover:text-slate-200 self-center " + (isFooter ? "max-lg:mb-4 md:pr-4" : " max-lg:mb-10 lg:pr-8");
	return (
		<>
			<Link href={"/"} className={linkClass} scroll={true}>
				<span>Features</span>
			</Link>
			<a href="www.google.com" className={linkClass}>
				<span className="">Tokenomics</span>
			</a>
			<a href="www.google.com" className={linkClass}>
				<span className="">Whitepaper</span>
			</a>
		</>
	);
}
export default Links;
