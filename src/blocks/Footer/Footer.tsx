import { projectConfig } from "../../projectConfig";

export const Footer = (): JSX.Element => {
	const { socials } = projectConfig;
	return (
		<footer className="py-9">
			<div className="relative mx-auto max-w-[1360px] px-4">
				<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
					<div className="flex gap-5">
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
					<div className="text-center text-base font-medium sm:text-xl">
						© {new Date().getFullYear()} $EGS. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};
