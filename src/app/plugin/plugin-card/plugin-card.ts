import { Component, input } from '@angular/core';
import { Plugin } from '../models/plugin';

@Component({
	selector: 'app-plugin-card',
	templateUrl: './plugin-card.html',
	styleUrl: './plugin-card.css',
})
export class PluginCard {
	readonly plugin = input.required<Plugin>();
}
