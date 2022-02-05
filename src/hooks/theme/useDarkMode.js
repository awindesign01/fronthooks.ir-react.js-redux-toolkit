import { useEffect, useState } from "react";

export default function UseDarkMode() {
	const [Theme, setTheme] = useState("light");
	const colorTheme = Theme === "light" ? "dark" : "light";
	useEffect(
		() => {
			const root = window.document.documentElement;
			root.classList.add(Theme);
			root.classList.remove(colorTheme);
		},
		[Theme, colorTheme],
		colorTheme,
	);

	return [colorTheme, setTheme];
}
