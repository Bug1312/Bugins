import { Component } from '@angular/core';
import { Plugin } from 'src/app/components/plugin-card/plugin-card.component';

@Component({
  selector: 'app-dalek-mod',
  templateUrl: './dalek-mod.component.html',
  styleUrls: ['./dalek-mod.component.css']
})
export class DalekModComponent {

  plugins: Plugin[] = [
    {
      title: "All Dimensions",
      image: "https://cdn.modrinth.com/data/Hvgyg7Gh/21e9ad28686ab74a5ceeb6f478446eb1fb2c1612.png",
      imageType: "url",
      description: "Dalek Mod addon that adds in all dimensions to the dimensional selector.",
      moreInfo: "https://modrinth.com/mod/dm_all_dims",
      downloadURL: "https://modrinth.com/mod/dm_all_dims",
    },
    {
      title: "Door Panel",
      image: "https://cdn.modrinth.com/data/XK53dXEu/e1662e4aad5b6826717ff36ebf87323bf0ddd6b2.png",
      imageType: "url",
      description: "A Dalek Mod addon that adds in a door control panel to open, close, lock, and unlock your TARDIS!",
      moreInfo: "https://modrinth.com/mod/dm_door_panel",
      downloadURL: "https://modrinth.com/mod/dm_door_panel",
    },    
    {
      title: "Dev Tools",
      image: "https://cdn.modrinth.com/data/oXiCK31F/0405127e41c580615c71058666a513f2c197d84e.png",
      imageType: "url",
      description: "Special tools for development of Dalek Mod and it's data packs",
      moreInfo: "https://modrinth.com/mod/dalekmoddev",
      downloadURL: "https://modrinth.com/mod/dalekmoddev",
    },
    {
      title: "Psychic Paper",
      image: "fa-github",
      imageType: "fontawesome",
      description: "This mod adds Psychic Paper to the mod and is based on suggestion #1",
      moreInfo: "https://github.com/Bug1312/dm_suggestion_mods/tree/mod/1",
      downloadURL: "https://github.com/Bug1312/dm_suggestion_mods/releases/tag/v1.0.0%2B1",
    },
    {
      title: "TARDIS Phone Calls",
      image: "fa-github",
      imageType: "fontawesome",
      description: "This mod adds Simple Voice Chat integration with TARDIS phonecalls and is based on suggestion #7",
      moreInfo: "https://github.com/Bug1312/dm_suggestion_mods/tree/mod/7",
      downloadURL: "https://github.com/Bug1312/dm_suggestion_mods/releases/tag/v1.0.0%2B7",
    },
    {
      title: "Cute Police Box Addon",
      image: "https://cdn.modrinth.com/data/LxUosjyd/1deb3b9b2687dcf7d39e3423674c7910eea11114.png",
      imageType: "url",
      description: "The super duper adorably awesome silly ridiculously pink police box that does not resemble an actual police box. Inexplicably smells like waffles.",
      moreInfo: "https://modrinth.com/mod/dmcuteboxaddon",
      downloadURL: "https://modrinth.com/mod/dmcuteboxaddon",
    },
    {
      title: "Pipe Exterior Addon",
      image: "assets/icons/pipe.png",
      imageType: "url",
      description: "Adds in a TARDIS exterior that looks like a Mario Pipe",
      moreInfo: "",
      fileName: "dmpipeaddon-1.0.1.jar",
      downloadURL: "plugins/files/dmpipeaddon-1.0.1.jar",
    },
    {
      title: "Temp Terraforge Fix",
      image: "fa-wrench",
      imageType: "fontawesome",
      description: "A fix for Terraforge and DM compatibility before it's officially put in an update",
      moreInfo: "",
      fileName: "temp_terraforge_dm_fix-1.0.0.jar",
      downloadURL: "plugins/files/temp_terraforge_dm_fix-1.0.0.jar",
    },
    {
      title: "Bug Pew Pew Noises (Resource Pack)",
      image: "assets/icons/pew_pew.png",
      imageType: "url",
      description: "Bug1312 replaces all the DM shooting noises with his mouth (Audio only pack)",
      moreInfo: "",
      fileName: "Bug_PewPew_Noises.zip",
      downloadURL: "plugins/files/Bug_PewPew_Noises.zip",
    },
  ];


}
