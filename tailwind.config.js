/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},

		fontFamily: {
			plex: "'IBM Plex Mono', 'sans-serif'",
			nazari: "'Nazari', 'sans-serif'",
		},

		colors: {
			brown: "#422720",
			white: "#FFFFFF",
			red: "#DE3B25",
			beige: "#FFDCAA",
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
