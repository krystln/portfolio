"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
	isDarkTheme: false,
	switchTheme: () => {}
});
export const ThemeSwitcherContext = createContext();

const Theme = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	useEffect(() => {
		setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
	}, []);

	useEffect(() => {
		document.querySelector("body").style.backgroundColor = isDarkTheme
			? "#000"
			: "#fff";
		document.querySelector("body").style.color = isDarkTheme ? "#fff" : "#000";
	}, [isDarkTheme]);

	const switchTheme = () => {
		setIsDarkTheme((prevTheme) => !prevTheme);
	};

	const data = {
		isDarkTheme,
		switchTheme
	};

	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default Theme;
