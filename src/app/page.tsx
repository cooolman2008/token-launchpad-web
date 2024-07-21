import Staking from "./components/Staking";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Tokenomics from "./components/Tokenomics";
import Features from "./components/Features";
import Socials from "./components/Socials";

export default function Home() {
	return (
		<>
			<div className="absolute right-0 left-0 top-0 bottom-0 z-0 bg-[url('/noise.png')] opacity-[0.04]"></div>
			<Navigation />
			<main className="mx-auto min-h-screen">
				<Intro />
				<Features />
				<Tokenomics />
				<Staking />
			</main>
			<Footer />
		</>
	);
}
