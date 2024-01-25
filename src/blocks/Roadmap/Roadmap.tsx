import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

import baklavaImg from "../../assets/img/baklava-05.png";
import palmImg from "../../assets/img/palm.png";
import mobileImg from "../../assets/img/roadmap-img-mobile.png";

export const Roadmap = (): JSX.Element => {
	return (
		<section id="roadmap" className="lg:-mt-[100px]">
			<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} resetOnLeave>
				<div className="relative mx-auto max-w-[1360px] px-4 lg:pb-[140px]">
					<div className="flex flex-col-reverse items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-start lg:gap-0">
						<div className="relative block w-full pb-[130%] sm:pb-[100%] lg:hidden">
							<img
								src={mobileImg}
								className="absolute h-full w-full object-contain"
								alt="Baklava"
							/>
						</div>
						<div className="mt-[70px] max-w-[545px] text-center lg:mt-[287px] lg:text-left">
							<h2 className="mb-7 text-center font-nazari text-5xl lg:text-left">Roadmap</h2>
							<div className="mb-7">
								<h3 className="mb-3 text-center text-[30px] font-bold lg:text-left">
									Preparation Phase:
								</h3>
								<ul className="ml-5 list-disc text-left">
									<li>Layering the Dough</li>
									<li>The Baking Process</li>
									<li>Taste Tests</li>
								</ul>
							</div>
							<div className="mb-7">
								<h3 className="mb-3 text-center text-[30px] font-bold lg:text-left">
									Baking Phase:
								</h3>
								<ul className="ml-5 list-disc text-left">
									<li>Adding the Syrup</li>
									<li>Gathering the Nuts</li>
									<li>Pre-heating the Oven</li>
								</ul>
							</div>
							<div className="mb-7">
								<h3 className="mb-3 text-center text-[30px] font-bold lg:text-left">
									Serving Phase:
								</h3>
								<ul className="ml-5 list-disc text-left">
									<li>Cutting the Baklava</li>
									<li>Serving the Feast</li>
									<li>The Feast Continues</li>
								</ul>
							</div>
						</div>
					</div>
					<MouseParallaxChild
						factorX={0.3}
						factorY={0.1}
						className="absolute right-6 top-0 z-20 hidden w-[50%] lg:block"
					>
						<img src={palmImg} alt="Castle" />
					</MouseParallaxChild>
					<img
						src={baklavaImg}
						className="absolute -right-[10%] bottom-0 z-30 hidden w-[70%] lg:block"
						alt="Baklava"
					/>
				</div>
			</MouseParallaxContainer>
		</section>
	);
};
