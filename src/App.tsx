import { Header } from "./blocks/Header/Header";
import { Intro } from "./blocks/Intro/Intro";

export const App = (): JSX.Element => {
	return (
		<div className="relative">
			<Header />
			<main>
				<Intro />
			</main>
		</div>
	);
};
