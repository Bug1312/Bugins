/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
			fontFamily: {
				josefin: ["Josefin Slab", "monospace"],
				mmd: ["Major Mono Display", "sans-serif"],
				lato: ["Lato", "sans-serif"]
			},
    },
  },
  plugins: [
    require("tailwind-heropatterns")({
			patterns: ["circuit-board"],
			colors: {
				"gray-500": "rgb(107 114 128)"
			}
		})
  ],
}

