import { About } from "./blocks/About/About";
import { Header } from "./blocks/Header/Header";
import { Intro } from "./blocks/Intro/Intro";
import { Mission } from "./blocks/Mission/Mission";

export const App = (): JSX.Element => {
	return (
		<div className="relative">
			<Header />
			<main>
				<Intro />
				<About />
				<Mission />
			</main>
		</div>
	);
};
