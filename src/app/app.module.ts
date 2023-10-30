import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationLayout } from './layouts/navigation-layout/navigation-layout.component';
import { HomeComponent } from './screens/home/home.component';
import { BlockbenchComponent } from './screens/blockbench/blockbench.component';
import { DalekModComponent } from './screens/dalek-mod/dalek-mod.component';
import { CircuitBoardLayout } from './layouts/circuit-board/circuit-board.component';
import { PluginCardComponent } from './components/plugin-card/plugin-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationLayout,
    HomeComponent,
    BlockbenchComponent,
    DalekModComponent,
    CircuitBoardLayout,
    PluginCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
