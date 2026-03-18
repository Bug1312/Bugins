import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
	imports: [RouterLink, RouterOutlet],
	templateUrl: './app-shell.html',
	styleUrl: './app-shell.css',
})
export class AppShell {
	readonly github = 'https://github.com/sponsors/Bug1312';
}
