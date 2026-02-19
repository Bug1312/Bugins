import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-layout',
  templateUrl: './navigation-layout.component.html',
  styleUrls: ['./navigation-layout.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavigationLayout {
  github: string = 'https://github.com/sponsors/Bug1312';
}
