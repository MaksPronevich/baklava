import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import burgerImg from "../../assets/img/burger.svg";
import closeImg from "../../assets/img/close.svg";
import logoImg from "../../assets/img/logo.svg";

export const Header = (): JSX.Element => {
	return (
		<header className="absolute left-0 top-0 z-[90] w-full pt-4">
			<div className="mx-auto max-w-[1360px] px-4">
				<div className="flex items-start justify-between">
					<div className="hidden lg:flex">
						<a
							href="#about"
							className="inline-flex w-[200px] justify-center px-2 py-5 font-nazari text-base font-normal transition hover:text-red"
						>
							About
						</a>
						<a
							href="#mission"
							className="inline-flex w-[200px] justify-center px-2 py-5 font-nazari text-base font-normal transition hover:text-red"
						>
							Mission
						</a>
					</div>
					<img src={logoImg} className="w-[130px] lg:w-[200px]" alt="Baklava" />
					<div className="hidden lg:flex">
						<a
							href="#okenomics"
							className="inline-flex w-[200px] justify-center px-2 py-5 font-nazari text-base font-normal transition hover:text-red"
						>
							Tokenomics
						</a>
						<a
							href="#roadmap"
							className="inline-flex w-[200px] justify-center px-2 py-5 font-nazari text-base font-normal transition hover:text-red"
						>
							Roadmap
						</a>
					</div>
					<Popover className="relative z-[9999] inline-flex lg:hidden">
						{({ open, close }) => (
							<>
								<Popover.Button className="">
									{open && <img src={closeImg} width={35} height={35} alt="Close" />}
									{!open && <img src={burgerImg} width={35} height={35} alt="Open" />}
								</Popover.Button>
								<Transition
									as={Fragment}
									enter="linear duration-300"
									enterFrom="opacity-0 translate-y-full"
									enterTo="opacity-100 translate-y-0"
									leave="linear duration-300"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-full"
								>
									<Popover.Panel className="absolute right-0  mt-10 transform">
										<div className="rounded-lg border-2 border-brown bg-beige shadow-lg">
											<a
												href="#about"
												className="inline-flex w-[200px] justify-center px-2 py-5 font-nazari text-base font-normal transition hover:text-red"
												onClick={() => close()}
											>
												About
											</a>
											<a
												href="#mission"
												className="inline-flex w-[200px] justify-center px-2 py-5 font-nazari text-base font-normal transition hover:text-red"
												onClick={() => close()}
											>
												Mission
											</a>
											<a
												href="#okenomics"
												className="inline-flex w-[200px] justify-center px-2 py-5 font-nazari text-base font-normal transition hover:text-red"
												onClick={() => close()}
											>
												Tokenomics
											</a>
											<a
												href="#roadmap"
												className="inline-flex w-[200px] justify-center px-2 py-5 font-nazari text-base font-normal transition hover:text-red"
												onClick={() => close()}
											>
												Roadmap
											</a>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
				</div>
			</div>
		</header>
	);
};
