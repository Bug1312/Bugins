import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
	imports: [RouterLink, RouterOutlet],
	templateUrl: './app-shell.html',
	styleUrl: './app-shell.css',
})
export class AppShell {
	private readonly platformId = inject(PLATFORM_ID);

	readonly github = 'https://github.com/sponsors/Bug1312';

	skipToMain() {
		if (isPlatformBrowser(this.platformId)) {
			window.location.hash = '';
			window.location.hash = 'main';
		}
	}
}
