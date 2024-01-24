import logoImg from "../../assets/img/logo.svg";

export const Header = (): JSX.Element => {
	return (
		<header className="pt-4">
			<div className="mx-auto max-w-[1360px] px-4">
				<div className="flex items-start justify-between">
					<div className="flex">
						<a
							href="#about"
							className="hover:text-red font-nazari inline-flex w-[200px] justify-center px-2 py-5 text-base font-normal transition"
						>
							About
						</a>
						<a
							href="#mission"
							className="hover:text-red font-nazari inline-flex w-[200px] justify-center px-2 py-5 text-base font-normal transition"
						>
							Mission
						</a>
					</div>
					<img src={logoImg} width={204} height={153} alt="Baklava" />
					<div className="flex">
						<a
							href="#okenomics"
							className="hover:text-red font-nazari inline-flex w-[200px] justify-center px-2 py-5 text-base font-normal transition"
						>
							Tokenomics
						</a>
						<a
							href="#roadmap"
							className="hover:text-red font-nazari inline-flex w-[200px] justify-center px-2 py-5 text-base font-normal transition"
						>
							Roadmap
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};
