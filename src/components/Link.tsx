import { LinkProps } from "./Link.props";

export const Link = ({ children, className, ...props }: LinkProps): JSX.Element => {
	return (
		<a
			className={`${className} bg-red hover:border-red hover:text-red inline-flex justify-center rounded-full border-[3px] px-6 py-4 text-2xl font-bold transition-all hover:bg-white`}
			{...props}
		>
			{children}
		</a>
	);
};
