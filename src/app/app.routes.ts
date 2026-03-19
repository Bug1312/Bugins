import { Routes } from '@angular/router';
import { AppShell } from './app-shell/app-shell';
import { Home } from './home/home';
import blockbench from './plugin/blockbench';
import dalekMod from './plugin/dalek-mod';
import minecraft from './plugin/minecraft';
import { PluginList } from './plugin/plugin-list/plugin-list';

export const routes: Routes = [
	{
		path: '',
		component: AppShell,
		children: [
			{ path: '', pathMatch: 'full', component: Home, title: 'Bugins - Minecraft Mods & Blockbench Plugins | Bug1312' },
			{
				path: 'blockbench',
				component: PluginList,
				title: 'Bugins - Blockbench Plugins | Bug1312',
				data: { plugins: blockbench, h2: 'Blockbench Plugins', description: 'Blockbench plugins and add-ons by Bug1312.' }
			},
			{
				path: 'minecraft',
				component: PluginList,
				title: 'Bugins - Minecraft Mods | Bug1312',
				data: { plugins: minecraft, h2: 'Minecraft Mods', description: 'Minecraft: Java Edition server & client mods by Bug1312. Unique variety from utility mods, content mods, and modjam entries.' }
			},
			{
				path: 'dalek-mod',
				component: PluginList,
				title: 'Bugins - Dalek Mod Add-ons & Mods | Bug1312',
				data: { plugins: dalekMod, h2: 'Dalek Mod Add-ons', description: 'Minecraft: Java Edition 1.16.5 mods by Bug1312 meant to be paired with Dalek Mod. Expand your Doctor Who gameplay with >40 new features, fixes, and gags.' }
			 },
		],
	}
];
