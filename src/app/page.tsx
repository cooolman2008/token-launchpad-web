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
			<Navigation />
			<main className="mx-auto min-h-screen">
				<Intro />
				<Features />
				<Tokenomics />
				<Staking />
				<Socials />
			</main>
			<Footer />
		</>
	);
}
