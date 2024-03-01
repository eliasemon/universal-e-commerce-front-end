import type { Metadata } from "next";
import { Inter, Poppins, Sofia } from "next/font/google";
import "./globals.css";

const inter = Inter({
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	subsets: ["latin"],
	variable: "--inter",
});

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	subsets: ["latin"],
	variable: "--poppins",
});

export const metadata: Metadata = {
	title: "Universal E-commerce",
	description:
		"Shop effortlessly from anywhere with our web platform. Explore a vast selection, discover amazing deals, and purchase your favorites - all online.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${inter.variable}`}>
				{children}
			</body>
		</html>
	);
}
