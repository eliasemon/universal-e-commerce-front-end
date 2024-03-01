import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["var(--inter)"],
				poppins: ["var(--poppins)"],
			},
			colors: {
				primary: {
					50: "#E6FEF3",
					100: "#D6F8E8",
					500: "#38CB89",
					600: "#35BD80",
					700: "#2D9F6C",
					900: "#157449",
				},
				nuetral: {
					50: "#F3F5F7",
					100: "#E8ECEF",
					500: "#6C7275",
					600: "#343839",
					700: "#232627",
					900: "#141718",
				},
			},
		},
	},
	plugins: [],
};
export default config;
