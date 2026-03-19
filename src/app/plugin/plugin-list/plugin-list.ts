import { Component, inject, input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Plugin } from '../models/plugin';
import { PluginCard } from "../plugin-card/plugin-card";

@Component({
	selector: 'app-plugin-list',
	imports: [PluginCard],
	templateUrl: './plugin-list.html',
	styleUrl: './plugin-list.css',
})
export class PluginList implements OnInit {
	readonly title = inject(Title);
	readonly meta = inject(Meta);

	readonly plugins = input<Plugin[]>([]);

	readonly h2 = input<string>();
	readonly description = input<string>();

	ngOnInit(): void {
		this.meta.addTags([
			{ property: 'og:title', content: this.title.getTitle() },
		]);

		const desc = this.description();
		if (desc) {
			this.meta.addTags([
				{ name: 'description', property: 'description', content: desc },
				{ property: 'og:description', content: desc },
			]);
		}
	}
}
