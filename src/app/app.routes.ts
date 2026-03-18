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
			{ path: '', title: 'Bugins - About', component: Home, pathMatch: 'full' },
			{ path: 'blockbench', title: 'Bugins - Blockbench', component: PluginList, data: { plugins: blockbench } },
			{ path: 'minecraft', title: 'Bugins - Minecraft', component: PluginList, data: { plugins: minecraft } },
			{ path: 'dalek-mod', title: 'Bugins - Dalek Mod', component: PluginList, data: { plugins: dalekMod } },
		],
	}
];
