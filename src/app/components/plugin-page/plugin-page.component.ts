import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Plugin, PluginCardComponent } from '../plugin-card/plugin-card.component';

@Component({
  selector: 'app-plugin-page',
  templateUrl: './plugin-page.component.html',
  standalone: true,
  imports: [NgFor, PluginCardComponent],
})
export class PluginPageComponent {
  @Input({required: true}) plugins!: Plugin[];
}
