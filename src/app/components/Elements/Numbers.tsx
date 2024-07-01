"use client";

export default function Numbers({ name, desc, more }: { name: string; desc: string; more?: string }) {
	return (
		<div className="flex flex-col grow basis-1/2 md:basis-1/3 2xl:basis-1/4 text-center py-10 pop">
			<p className="text-base text-gray-400 mb-1">{name}</p>
			<span
				className={
					"text-4xl sm:text-5xl font-black bg-gradient-to-t safu-grad-text-white " +
					(more ? " from-cyan-400/60 to-cyan-400" : " from-slate-200/80 to-slate-200")
				}
			>
				{desc}
			</span>
			{more && <span className="text-sm font-normal text-slate-200">{more}</span>}
		</div>
	);
}
