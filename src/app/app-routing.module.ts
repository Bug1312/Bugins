import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationLayout } from './layouts/navigation-layout/navigation-layout.component';
import { CircuitBoardLayout } from './layouts/circuit-board/circuit-board.component';
import { HomeComponent } from './screens/home/home.component';
import { DalekModComponent } from './screens/dalek-mod/dalek-mod.component';
import { BlockbenchComponent } from './screens/blockbench/blockbench.component';
import { MinecraftComponent } from './screens/minecraft/minecraft.component';

const routes: Routes = [
  { path: '', component: NavigationLayout, children: [
    { path: '', component: CircuitBoardLayout, children: [
      { path: '', component: HomeComponent, title: 'Bugins - About' },
      { path: 'blockbench', component: BlockbenchComponent, title: 'Bugins - Blockbench' },
      { path: 'minecraft', component: MinecraftComponent, title: 'Bugins - Minecraft' },
      { path: 'dalek-mod', component: DalekModComponent, title: 'Bugins - Dalek Mod' },
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
