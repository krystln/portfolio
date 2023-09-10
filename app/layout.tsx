import "./styles/globals.css";
import Theme from "./components/Theme";

export const metadata = {
  title: "👋 Welcome! To my website",
  description:
    "Web Developer, Open Source Enthusiast, and a Student. Looking forward for opportunities to learn and grow.",
  image: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Theme>
        <body>{children}</body>
      </Theme>
    </html>
  );
}
