"use client";

import Link from "next/link";

function Links({ type }: { type: number }) {
	const linkClass =
		"hover:text-slate-200 cursor-pointer self-center " + (type === 3 ? "max-lg:mb-4 md:pr-4" : " max-lg:mb-10 lg:pr-8");
	return (
		<>
			<Link href="#" className={linkClass}>
				Build
			</Link>
			<a href="#" className={linkClass}>
				Participate
			</a>
			<a href="#" className={linkClass}>
				Resources
			</a>
		</>
	);
}
export default Links;
