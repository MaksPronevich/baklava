import { useState } from "react";

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
		<section>
			<div className="mx-auto max-w-[1360px] px-4">
				<div className="flex justify-around">
					<div className="max-w-[546px] text-center text-white">
						<h1 className="font-nazari mb-6 text-[64px]/[110%]">
							Baklava the unexpectedly cute jorney
						</h1>
						<p>
							hello et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus
							tincidunt eu adipiscing sociis arcu lorem porttitor.
						</p>
						<Link className="my-6 w-full" href="">
							Buy $EGS
						</Link>
						<div className="relative flex items-center gap-6 rounded-[10px] border-[3px] bg-[rgba(66,39,32,0.7)] px-6 py-5">
							<button onClick={() => copyHandler(address)}>
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
							<span className="text-base font-medium">{address}</span>
							{isNotificationVisible && (
								<div className="text-brown absolute -bottom-[40px] left-0 rounded-lg bg-white px-4 py-1 text-base">
									Copied
								</div>
							)}
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
			</div>
		</section>
	);
};
