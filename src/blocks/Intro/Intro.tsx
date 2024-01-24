import { useState } from "react";

import baklavaImg from "../../assets/img/baklava-01.png";
import { Link } from "../../components/Link";
import { projectConfig } from "../../projectConfig";

export const Intro = (): JSX.Element => {
	const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);
	const { address, socials } = projectConfig;

	const copyHandler = (copiedText: string): void => {
		navigator.clipboard.writeText(copiedText);
		setIsNotificationVisible(true);
		setTimeout(() => {
			setIsNotificationVisible(false);
		}, 500);
	};

	return (
		<section className="relative z-20 bg-[url('./assets/img/intro-bg.png')] bg-cover bg-[center_30px] bg-no-repeat ">
			<div className="relative mx-auto max-w-[1360px] px-4 pb-[580px] pt-[180px] lg:pt-[255px]">
				<div className="flex flex-col-reverse items-center gap-[50px] lg:flex-row lg:items-start lg:justify-around lg:gap-0">
					<div className="relative z-30 w-full max-w-[546px] text-center text-white">
						<h1 className="font-nazari mb-6 text-[45px] leading-[110%] md:text-[64px]">
							Baklava the unexpectedly cute jorney
						</h1>
						<p>
							hello et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus
							tincidunt eu adipiscing sociis arcu lorem porttitor.
						</p>
						<Link className="my-6 w-full" href="">
							Buy $EGS
						</Link>
						<div className="relative flex items-center rounded-[10px] border-[3px] bg-[rgba(66,39,32,0.7)] px-6 py-5">
							<button onClick={() => copyHandler(address)} className="mr-6">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="hover:fill-beige fill-white transition"
								>
									<path d="M0 8H16V24H0V8ZM8 0V4H20V16H24V0H8Z" />
								</svg>
							</button>
							<div className="truncate">
								<span className="text-base font-medium">{address}</span>
							</div>
							{isNotificationVisible && (
								<div className="text-brown absolute -bottom-[40px] left-0 rounded-lg bg-white px-4 py-1 text-base">
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
					<div>
						<div className="flex gap-4">
							{socials.map(({ name, logoUrl, link }, index) => (
								<a
									key={index}
									href={link}
									className="bg-red inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border-[3px] border-white transition hover:scale-[0.8]"
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
					className="absolute right-[5%] top-[30%] hidden w-[43%]  lg:block"
					alt="Baklava"
				/>
			</div>
		</section>
	);
};
