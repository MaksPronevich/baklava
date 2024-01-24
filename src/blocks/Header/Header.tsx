import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import burgerImg from "../../assets/img/burger.svg";
import closeImg from "../../assets/img/close.svg";
import logoImg from "../../assets/img/logo.svg";

export const Header = (): JSX.Element => {
	return (
		<header className="absolute left-0 top-0 z-50 w-full pt-4">
			<div className="mx-auto max-w-[1360px] px-4">
				<div className="flex items-start justify-between">
					<div className="hidden lg:flex">
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
					<img src={logoImg} className="w-[130px] lg:w-[200px]" alt="Baklava" />
					<div className="hidden lg:flex">
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
					<Popover className="relative inline-flex lg:hidden">
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
									<Popover.Panel className="absolute right-0 z-10 mt-10 transform">
										<div className="bg-beige border-brown rounded-lg border-2 shadow-lg">
											<a
												href="#about"
												className="hover:text-red font-nazari inline-flex w-[200px] justify-center px-2 py-5 text-base font-normal transition"
												onClick={() => close()}
											>
												About
											</a>
											<a
												href="#mission"
												className="hover:text-red font-nazari inline-flex w-[200px] justify-center px-2 py-5 text-base font-normal transition"
												onClick={() => close()}
											>
												Mission
											</a>
											<a
												href="#okenomics"
												className="hover:text-red font-nazari inline-flex w-[200px] justify-center px-2 py-5 text-base font-normal transition"
												onClick={() => close()}
											>
												Tokenomics
											</a>
											<a
												href="#roadmap"
												className="hover:text-red font-nazari inline-flex w-[200px] justify-center px-2 py-5 text-base font-normal transition"
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
