"use client";

import { useEffect, useState } from "react";

function Presale() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient && (
				<div className="w-full flex justify-center text-center py-6 md:py-8 bg-[#000000] border-t border-neutral-800 z-30 fixed bottom-0">
					<div className="container flex max-md:flex-col justify-center">
						<p className="text-4xl text-slate-200 font-normal italic max-md:mb-4">
							<b className="text-4xl font-black">PRESALE</b> is on!
						</p>
						<a href="https://app.safulauncher.com/" target="_blank" className="md:ml-12 flex justify-center">
							<button className="safu-button-secondary">Buy Presale</button>
						</a>
					</div>
				</div>
			)}
		</>
	);
}
export default Presale;
