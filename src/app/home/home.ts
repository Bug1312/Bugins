import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-home',
	templateUrl: './home.html',
	styleUrls: ['./home.css'],
})
export class Home {
	readonly title = inject(Title);
	readonly meta = inject(Meta);

	ngOnInit(): void {
		const desc = 'Explore Bugins by Bug1312: So far a collection of custom Minecraft mods, Blockbench plugins, and Dalek Mod add-ons. Downloads available.';
		this.meta.addTags([
			{ property: 'og:title', content: this.title.getTitle() },
			{ name: 'description', property: 'description', content: desc },
			{ property: 'og:description', content: desc },
		]);
	}
}
