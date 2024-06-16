import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CircuitBoardLayout } from './app/layouts/circuit-board/circuit-board.component';
import { NavigationLayout } from './app/layouts/navigation-layout/navigation-layout.component';

enableProdMode();

const routes: Routes = [
  { path: '', component: NavigationLayout, children: [
    { path: '', component: CircuitBoardLayout, children: [
      { path: '', title: 'Bugins - About', loadComponent: () => import('./app/screens/home/home.component').then(m => m.HomeComponent)  },
      { path: 'blockbench', title: 'Bugins - Blockbench', loadComponent: () => import('./app/screens/plugin-pages/blockbench.component').then(m => m.BlockbenchComponent) },
      { path: 'minecraft', title: 'Bugins - Minecraft', loadComponent: () => import('./app/screens/plugin-pages/minecraft.component').then(m => m.MinecraftComponent) },
      { path: 'dalek-mod', title: 'Bugins - Dalek Mod', loadComponent: () => import('./app/screens/plugin-pages/dalek-mod.component').then(m => m.DalekModComponent) },
    ]}
  ]}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
}).catch(err => console.error(err));