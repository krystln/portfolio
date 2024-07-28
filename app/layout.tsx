import "./styles/globals.css";

export const metadata = {
	title: "👋 Welcome! To my website",
	description: "Fullstack Web Developer. Looking for career opportunities."
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
