import { About } from "./blocks/About/About";
import { Footer } from "./blocks/Footer/Footer";
import { Header } from "./blocks/Header/Header";
import { Intro } from "./blocks/Intro/Intro";
import { Mission } from "./blocks/Mission/Mission";
import { Roadmap } from "./blocks/Roadmap/Roadmap";
import { Tokenomics } from "./blocks/Tokenomics/Tokenomics";

export const App = (): JSX.Element => {
	return (
		<div className="relative">
			<Header />
			<main>
				<Intro />
				<About />
				<Mission />
				<Tokenomics />
				<Roadmap />
			</main>
			<Footer />
		</div>
	);
};
