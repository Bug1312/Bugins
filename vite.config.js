import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@c": path.resolve(__dirname, "./src/components/"),
			"@s": path.resolve(__dirname, "./src/screens/"),
			"@a": path.resolve(__dirname, "./src/assets/"),
		}
	}
});
