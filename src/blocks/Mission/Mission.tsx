import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

import baklavaImg from "../../assets/img/03.svg";
import castleImg from "../../assets/img/castle.png";
import cloudImg from "../../assets/img/cloud-02.svg";
import mobileImg from "../../assets/img/mission-img-mobile.png";

export const Mission = (): JSX.Element => {
	return (
		<section id="mission" className="lg:-mt-[580px]">
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
						<div className="mt-[150px] max-w-[545px] text-center lg:mt-[768px] lg:-translate-y-[60px]">
							<h2 className="mb-7 font-nazari text-5xl">Our mission</h2>
							<div>
								<p>Ride the honey pipes all the way to the moon.</p>
								<p>To become the sweetest, richest meme in the Avalanche universe.</p>
								<p>Desserts are the new meta.</p>
								<p>We are layered.</p>
								<p>
									Baklava's mission is to feed hungry crypto degens. Normies' life is too savoury.
									We don't rug with it.
								</p>
							</div>
						</div>
					</div>
					<MouseParallaxChild
						factorX={-0.2}
						factorY={0.1}
						className="absolute right-0 top-[61px] z-10 hidden w-[50%] lg:block"
					>
						<img src={cloudImg} alt="Cloud" />
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.3}
						factorY={0.1}
						className="absolute right-0 top-0 z-20 hidden w-[40%] lg:block"
					>
						<img src={castleImg} alt="Castle" />
					</MouseParallaxChild>
					<object
						data={baklavaImg}
						className="absolute right-0 top-1/2 z-30 hidden w-[40%] -scale-x-[1] scale-y-[1] lg:block"
						type="image/svg+xml"
					/>
				</div>
			</MouseParallaxContainer>
		</section>
	);
};
