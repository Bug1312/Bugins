import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-layout',
  templateUrl: './navigation-layout.component.html',
  styleUrls: ['./navigation-layout.component.css']
})
export class NavigationLayout {
  paypal: string = 'https://www.paypal.com/donate/?business=S45YHKRWDHALG&no_recurring=1&currency_code=USD';
  coffee: string = 'https://www.buymeacoffee.com/bug1312';
}
