import "./styles/globals.css";
import "./styles/components.css";

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
      <body>{children}</body>
    </html>
  );
}
