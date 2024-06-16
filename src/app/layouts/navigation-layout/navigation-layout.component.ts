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
  paypal: string = 'https://www.paypal.com/donate/?business=S45YHKRWDHALG&no_recurring=1&currency_code=USD';
  coffee: string = 'https://www.buymeacoffee.com/bug1312';
}
