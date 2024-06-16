import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent {
  @Input({required: true}) plugin!: Plugin;
}


export type Plugin = {
  title: string,
  image: string,
  imageType: 'fontawesome' | 'google' | 'url',
  sharp?: boolean,
  // descriptionType: 'raw' | 'modrinth' | 'github-README' | 'blockbench'
  description: string,
  moreInfo: string,
  fileName?: string | undefined,
  downloadURL: string, 
}