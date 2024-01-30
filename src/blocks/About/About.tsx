import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

import baklavaImg from "../../assets/img/02.svg";
import mobileImg from "../../assets/img/about-img-mobile.png";
import cloudImg from "../../assets/img/cloud.svg";
import housesImg from "../../assets/img/houses.png";

export const About = (): JSX.Element => {
	return (
		<section id="about" className="-mt-[150px]">
			<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} resetOnLeave>
				<div className="relative mx-auto max-w-[1360px] px-4 lg:pb-[735px]">
					<div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-end lg:gap-0">
						<div className="mt-[200px] max-w-[545px] text-center lg:translate-y-[60px]">
							<h2 className="mb-7 font-nazari text-5xl">About Baklava</h2>
							<div>
								<p>A unique flavor and texture. The best dessert in the world.</p>
								<p>We are nuts</p>
								<p>We are baked.</p>
								<p>We are layered.</p>
								<p>We are soaked.</p>
								<p>STICKY LIQUIDITY, SWEET RETURNS, LIMITED SUPPLY.</p>
							</div>
						</div>
						<div className="relative block w-full pb-[130%] sm:pb-[100%] lg:hidden">
							<img
								src={mobileImg}
								className="absolute h-full w-full object-contain"
								alt="Baklava"
							/>
						</div>
					</div>
					<MouseParallaxChild
						factorX={-0.2}
						factorY={0.1}
						className="absolute left-[5%] top-0 z-[991] hidden lg:block"
					>
						<img src={cloudImg} alt="Cloud" />
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.3}
						factorY={0.1}
						className="absolute left-4 top-[55px] z-[992] hidden w-[40%] lg:block"
					>
						<img src={housesImg} alt="Houses" />
					</MouseParallaxChild>
					<object
						data={baklavaImg}
						className="absolute left-4 top-1/2 z-[993] hidden w-[40%] lg:block"
						type="image/svg+xml"
					/>
				</div>
			</MouseParallaxContainer>
		</section>
	);
};
