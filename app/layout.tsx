import { MouseEventHandler } from "react";
import "./styles/globals.css";
import { Scroll } from "./components/Scroll";

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
      <body className="py-32 flex flex-col items-center justify-center">
        {children}
        <Scroll />
      </body>
    </html>
  );
}
