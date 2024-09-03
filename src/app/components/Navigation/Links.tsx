"use client";

import Link from "next/link";

function Links({ type }: { type: number }) {
	const linkClass =
		"hover:text-slate-200 self-center " + (type === 3 ? "max-lg:mb-4 md:pr-4" : " max-lg:mb-10 lg:pr-8");
	return (
		<>
			<Link href="#" className={linkClass}>
				<span>Build</span>
			</Link>
			<a href="#" className={linkClass}>
				<span className="">Participate</span>
			</a>
			<a href="#" className={linkClass}>
				<span className="">Resources</span>
			</a>
		</>
	);
}
export default Links;
