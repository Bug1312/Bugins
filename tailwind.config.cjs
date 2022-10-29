/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			dropShadow: {
				full: '0 0 5px black'
			},
			fontFamily: {
				josefin: ["Josefin Slab", "monospace"],
				mmd: ["Major Mono Display", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				nugo: ["Nugo Sans", "sans-serif"]
			},
			listStyleType: {
				arrow: "'\\003E  '"
			}
		}
	},
	plugins: [
		require("tailwind-heropatterns")({
			patterns: ["circuit-board", "topography", "bubbles"],
			colors: {
				"slate-400": "rgb(148 163 184)"
			}
		})
	]
};
