"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, inView, spring, stagger } from "motion";
import Arrow from "./Arrow";
import { scrollTo } from "@/app/Utils/utils";

export default function Collapse({ name, type }: { name: string; type: number }) {
	const [expand, setExpand] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const arrowRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const close = useCallback(() => {
		if (arrowRef?.current)
			animate(
				arrowRef?.current,
				{ rotate: 0 },
				{
					easing: "ease-in-out",
					duration: 0.5,
					direction: "alternate",
				}
			);
		if (contentRef?.current) animate(contentRef?.current, { maxHeight: 0, opacity: 0 }, { easing: "ease-in-out" });
	}, []);

	const open = useCallback(() => {
		console.log(arrowRef?.current);
		if (wrapperRef?.current?.id) scrollTo(wrapperRef?.current?.id);
		if (arrowRef?.current)
			animate(
				arrowRef?.current,
				{ rotate: [0, -180] },
				{
					easing: "ease-in-out",
					duration: 0.5,
					direction: "alternate",
				}
			);
		if (contentRef?.current)
			animate(
				contentRef?.current,
				{ maxHeight: "600px", opacity: 1 },
				{ easing: spring({ stiffness: 300, damping: 16, mass: 0.4 }), delay: 0.1 }
			);
	}, []);

	useEffect(() => {
		if (expand) {
			open();
		} else {
			close();
		}
	}, [close, open, expand]);
	return (
		<div ref={wrapperRef} className="w-full border-b border-gray-700 py-8">
			<div className="flex mb-1">
				<Arrow
					ref={arrowRef}
					onClick={() => {
						setExpand(!expand);
					}}
					checked={expand}
				/>
				<h3 className="text-3xl mb-1 text-gray-300">{name}</h3>
			</div>
			<div ref={contentRef} className={"flex flex-wrap max-h-0 pl-10 "}>
				{type === 1 && (
					<div className={"mt-8"}>
						<p className="text-base xl:text-lg font-light text-gray-300">
							SAFU Launcher is a decentralised platform for launching blockchain projects/IDOs fully on-chain with
							enhanced security and free inbuilt features such as custom taxation, liquidity pool creation, liquidity
							token locker and native token vesting. Built on Ethereum mainnet, it offers cross-chain compatibility with
							other supported networks.
							<br />
							<br />
							Fully on-chain means SAFU Launcher is decentralised by design. The existing platforms use an address to
							launch contracts from a centralised server, making it easier for hackers to launch a malicious contract
							from the same address. SAFU Launcher is a smart contract that is immutable and open source, hence any
							contract launched by the SAFU Launcher smart contract address is deemed safu. SAFU Launcher can also be
							integrated with any dApp or smart contract to safely launch a project.
							<br />
							<br />
							Immutability means that SAFU smart contracts canot be modified once deployed as they are not upgradable.
							SAFU uses EIP-2535 diamond standard that supports upgradability but it is removed to ensure that SAFU
							contracts are secure.
							<br />
							<br />
							With SAFU Launcher, you can customise tokenomics, launch liquidity pool for your project and protect
							liquidity tokens. SAFU Launcher's native token vesting ensures a fair and transparent allocation process
							and supports staking pools for the launched ERC20 tokens. These features are in-built and available to
							users for free.
							<br />
							<br />
							SAFU Launcher offers investors early opportunities to invest in IDOs and discover the latest blockchain
							innovations.
							<br />
							<br />
							To understand SAFU better, read the{" "}
							<a href="Safu Launcher whitepaper.pdf" className="text-sky-500" target="_blank">
								whitepaper
							</a>
							.
						</p>
					</div>
				)}
				{type === 2 && (
					<div className={"mt-8"}>
						<p className="text-base xl:text-lg font-light text-gray-300">
							$SAFU is the first ERC20 token that deploys other ERC20 tokens. Its liquidity token locking and token
							vesting features are free and inbuilt. Every token launched on the platform can launch its own staking
							pool with rewards in $ETH. SAFU Launcher prevents sniper attacks by allowing projects to set high initial
							taxes for a short duration on launch, and ensure that it drops below an acceptable tax percentage of 6
							percent automatically so a regular user is not penalised.
							<br />
							<br />
							<a
								href="https://medium.com/@SAFULauncherERC/what-makes-safu-launcher-different-aaced9d83c46"
								className="text-sky-500"
								target="_blank"
							>
								Read the post
							</a>{" "}
							to understand the features that differentiate SAFU from the existing players in the market.
						</p>
					</div>
				)}
				{type === 3 && (
					<div className={"mt-8"}>
						<p className="text-base xl:text-lg font-light text-gray-300">
							Projects launched on SAFU have their liquidity pool tokens automatically locked, there are no airdrops
							either. A maximum of 20% of supply can be allocated to the team, but even this allocation is vested with a
							minimum cliff period of 30 days from creation of its liquidity pool.
						</p>
					</div>
				)}
				{type === 4 && (
					<div className={"mt-8"}>
						<p className="text-base xl:text-lg font-light text-gray-300">
							Projects can launch projects for free on SAFU Launcher. Unlike existing IDO platforms, SAFU Launcher
							offers features like liquidity locking and token vesting for free.
						</p>
					</div>
				)}
				{type === 5 && (
					<div className={"mt-8"}>
						<p className="text-base xl:text-lg font-light text-gray-300">
							SAFU Launcher is compatible across multiple chains. SAFU supports Base, BSC, Polygon, Optimism, Arbitrium,
							Avalanche and Blast chains at present and will expand the support to other EVMs (Ehtereum Virtual
							Machines) soon.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
