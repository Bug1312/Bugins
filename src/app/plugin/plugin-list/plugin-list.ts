import { Component, input } from '@angular/core';
import { Plugin } from '../models/plugin';
import { PluginCard } from "../plugin-card/plugin-card";

@Component({
	selector: 'app-plugin-list',
	imports: [PluginCard],
	templateUrl: './plugin-list.html',
	styleUrl: './plugin-list.css',
})
export class PluginList {
	readonly plugins = input<Plugin[]>([]);
}
