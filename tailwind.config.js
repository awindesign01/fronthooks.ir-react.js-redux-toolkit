module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"main-light": "#fafafa",
				"main-dark": "#1c1c1e",
				"subsidiary-dark": "#28282b",
				"main-site-color": "#733dd8",
			},
			animation: {
				load: "load 5s linear 1",
			},
			keyframes: {
				load: {
					"0%": { width: "0%" },
					"100%": { width: "100%" },
				},
			},
		},
	},
	plugins: [],
};
