import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

import baklavaImg from "../../assets/img/baklava-04.png";
import cloudImg from "../../assets/img/cloud.svg";
import buildingImg from "../../assets/img/intro-building.png";
import buildingSmImg from "../../assets/img/intro-building-sm.png";
import fogImg from "../../assets/img/intro-fog.svg";
import fogSmImg from "../../assets/img/intro-fog-sm.svg";
import { Link } from "../../components/Link";
import { projectConfig } from "../../projectConfig";

export const Tokenomics = (): JSX.Element => {
	const { buyEGSLink } = projectConfig;

	return (
		<section
			id="tokenomics"
			className="overflow-hidden bg-[url('./assets/img/intro-bg-mobile.png')] bg-cover bg-center bg-no-repeat lg:bg-none"
		>
			<MouseParallaxContainer
				globalFactorX={0.1}
				globalFactorY={0.1}
				resetOnLeave
				className="relative lg:-mx-[20%] lg:px-[20%]"
			>
				<div className="relative mx-auto max-w-[1360px] px-4 pb-[130px] pt-[180px] lg:pb-[400px] lg:pt-[255px]">
					<div className="flex flex-col-reverse items-center gap-[50px] lg:flex-row lg:items-start lg:justify-end lg:gap-0">
						<div className="relative z-[80] w-full max-w-[546px] text-center text-white lg:mr-9 lg:translate-y-[60px]">
							<h2 className="mb-6 font-nazari text-5xl leading-[110%]">Tokenomics</h2>
							<p>LP tokens are burnt, unlike our filo dough. Contract ownership is renounced.</p>
							<div className="mx-auto mt-6 inline-flex h-[117px] w-full max-w-[318px] flex-col items-center justify-center gap-2 bg-[url('./assets/img/token-sipply.png')]">
								<span>Token Supply:</span>
								<div className="inline-flex items-center gap-4">
									<span className="translate-y-[4px] font-nazari text-4xl">300 B</span>
									<span className="text-4xl font-bold">$EGS</span>
								</div>
							</div>
							<Link className="my-6 w-full max-w-[318px]" href={buyEGSLink}>
								Buy Now
							</Link>
							<div className="relative mt-12 block w-full pb-[90%] lg:hidden">
								<img
									src={baklavaImg}
									className="absolute h-full w-full object-contain"
									alt="Baklava"
								/>
							</div>
						</div>
					</div>
					<img
						src={baklavaImg}
						className="absolute left-0 top-0 z-[70] hidden w-[59%] lg:block"
						alt="Baklava"
					/>
					<MouseParallaxChild
						factorX={0.3}
						factorY={0.1}
						className="absolute right-[10%] top-[7%] hidden lg:block"
					>
						<div className=" h-[250px] w-[250px] rounded-full bg-white" />
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.3}
						factorY={0.1}
						className="absolute inset-x-0 top-0 hidden lg:block"
					>
						<img src={cloudImg} alt="Cloud" />
					</MouseParallaxChild>
				</div>
				<MouseParallaxChild
					factorX={0}
					factorY={0.1}
					className="absolute inset-x-0 top-[10%] z-10 hidden lg:block"
				>
					<img src={fogImg} className="-scale-x-[1] scale-y-[1] transform" alt="Fog" />
				</MouseParallaxChild>
				<MouseParallaxChild
					factorX={-0.1}
					factorY={-0.1}
					className="absolute inset-x-0 top-[20%] z-20 hidden scale-[-1,1] lg:block"
				>
					<img src={fogSmImg} className="-scale-x-[1] scale-y-[1] transform" alt="Fog" />
				</MouseParallaxChild>
				<MouseParallaxChild
					factorX={0.1}
					factorY={0}
					className="absolute inset-x-0 top-[20%] z-30 hidden lg:block"
				>
					<img src={buildingImg} className="-scale-x-[1] scale-y-[1] transform" alt="Building" />
				</MouseParallaxChild>
				<MouseParallaxChild
					factorX={-0.1}
					factorY={0}
					className="absolute inset-x-0 top-[25%] z-40 hidden lg:block"
				>
					<img src={buildingSmImg} className="-scale-x-[1] scale-y-[1] transform" alt="Building" />
				</MouseParallaxChild>
				<div className="absolute left-0 top-0 z-50 hidden h-full w-full bg-gradient-to-l from-[rgba(255,220,170,0.00)] from-50% to-[#FFDCAA] to-100% lg:block" />
			</MouseParallaxContainer>
		</section>
	);
};
