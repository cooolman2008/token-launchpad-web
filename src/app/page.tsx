import Difference from "./components/Difference";
import Footer from "./components/Footer";
import Governance from "./components/Governance";
import Intro from "./components/Intro";
import Launch from "./components/Launch";
import Navigation from "./components/Navigation";
import Tokenomics from "./components/Tokenomics";
import Try from "./components/Try";

export default function Home() {
	return (
		<>
			<main className="mx-auto flex min-h-screen flex-col items-center">
				<Navigation />
				<div className="w-screen h-screen"></div>
				{/* <Launch />
				<Intro />
				<Difference />
				<Tokenomics />
				<Governance />
				<Try /> */}
			</main>
			<Footer />
		</>
	);
}
