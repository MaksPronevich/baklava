import { useState } from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

import baklavaImg from "../../assets/img/baklava-01.png";
import buildingImg from "../../assets/img/intro-building.png";
import buildingSmImg from "../../assets/img/intro-building-sm.png";
import fogImg from "../../assets/img/intro-fog.svg";
import fogSmImg from "../../assets/img/intro-fog-sm.svg";
import { Link } from "../../components/Link";
import { projectConfig } from "../../projectConfig";

export const Intro = (): JSX.Element => {
	const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);
	const { address, socials, buyEGSLink } = projectConfig;

	const copyHandler = (copiedText: string): void => {
		navigator.clipboard.writeText(copiedText);
		setIsNotificationVisible(true);
		setTimeout(() => {
			setIsNotificationVisible(false);
		}, 500);
	};

	return (
		<section className="overflow-hidden bg-[url('./assets/img/intro-bg-mobile.png')] bg-cover bg-center bg-no-repeat lg:bg-none">
			<MouseParallaxContainer
				globalFactorX={0.1}
				globalFactorY={0.1}
				resetOnLeave
				className="relative lg:-mx-[100px] lg:px-[100px]"
			>
				<div className="relative mx-auto max-w-[1360px] px-4 pb-[130px] pt-[180px] lg:pb-[400px] lg:pt-[255px]">
					<div className="flex flex-col-reverse items-center gap-[50px] lg:flex-row lg:items-start lg:justify-around lg:gap-0">
						<div className="relative z-[80] w-full max-w-[546px] text-center text-white lg:translate-y-[60px]">
							<h1 className="mb-6 font-nazari text-[64px] leading-[110%]">Baklava</h1>
							<p>
								Every crypto enthusiast's sweetest dream. Handcrafted in the secret chambers of Ava
								Labs. It's the cherished family recipe by Emin Gün Sirer.
							</p>
							<Link className="my-6 w-full" href={buyEGSLink}>
								Buy $EGS
							</Link>
							<div className="relative flex items-center rounded-[10px] border-[3px] bg-[rgba(66,39,32,0.7)] px-6 py-5">
								<button onClick={() => copyHandler(address)} className="mr-6">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										className="fill-white transition hover:fill-beige"
									>
										<path d="M0 8H16V24H0V8ZM8 0V4H20V16H24V0H8Z" />
									</svg>
								</button>
								<div className="truncate">
									<span className="text-base font-medium">{address}</span>
								</div>
								{isNotificationVisible && (
									<div className="absolute -bottom-[40px] left-0 rounded-lg bg-white px-4 py-1 text-base text-brown">
										Copied
									</div>
								)}
							</div>
							<div className="relative mt-12 block w-full pb-[90%] lg:hidden">
								<img
									src={baklavaImg}
									className="absolute h-full w-full object-contain"
									alt="Baklava"
								/>
							</div>
						</div>
						<div className="relative z-[80]">
							<div className="flex gap-4">
								{socials.map(({ name, logoUrl, link }, index) => (
									<a
										key={index}
										href={link}
										className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border-[3px] border-white bg-red transition hover:scale-[0.8]"
										target="_blank"
									>
										<img src={logoUrl} alt={name} />
									</a>
								))}
							</div>
						</div>
					</div>
					<img
						src={baklavaImg}
						className="absolute right-[5%] top-[30%] z-[70] hidden w-[43%] lg:block"
						alt="Baklava"
					/>
					<MouseParallaxChild
						factorX={0.3}
						factorY={0.1}
						className="absolute left-[10%] top-[7%] hidden lg:block"
					>
						<div className=" h-[250px] w-[250px] rounded-full bg-white" />
					</MouseParallaxChild>
				</div>
				<MouseParallaxChild
					factorX={0}
					factorY={0.1}
					className="absolute inset-x-0 top-[10%] z-10 hidden lg:block"
				>
					<img src={fogImg} alt="Fog" />
				</MouseParallaxChild>
				<MouseParallaxChild
					factorX={-0.1}
					factorY={-0.1}
					className="absolute inset-x-0 top-[20%] z-20 hidden lg:block"
				>
					<img src={fogSmImg} alt="Fog" />
				</MouseParallaxChild>
				<MouseParallaxChild
					factorX={0.1}
					factorY={0}
					className="absolute inset-x-0 top-[20%] z-30 hidden lg:block"
				>
					<img src={buildingImg} alt="Building" />
				</MouseParallaxChild>
				<MouseParallaxChild
					factorX={-0.1}
					factorY={0}
					className="absolute inset-x-0 top-[25%] z-40 hidden lg:block"
				>
					<img src={buildingSmImg} alt="Building" />
				</MouseParallaxChild>
				<div className="absolute left-0 top-0 z-50 hidden h-full w-full bg-gradient-to-l from-[#FFDCAA] from-0% to-[rgba(255,220,170,0.00)] to-50% lg:block" />
			</MouseParallaxContainer>
		</section>
	);
};
