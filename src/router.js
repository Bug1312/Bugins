import { createRouter, createWebHistory } from "vue-router";

import Home from "@s/Home.vue";
import Plugins from "@s/Plugins.vue";

const routes = [
	{ path: "/", component: Home, meta: { title: "Bugins - Home" } },
	{ path: "/plugins", component: Plugins, meta: { title: "Bugins - Plugins" } },
	// { path: "/:catchAll(.*)", redirect: "/" },
	// { path: "/docs/:catchAll(.*)", redirect: "/", meta: { title: "Bugins - Docs" } },
	// { path: "/plugins/:catchAll(.*)", redirect: "/" }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeResolve((to, from, next) => {
	document.title = to.meta.title || 'Bugins';
	next();
});

export default router;
