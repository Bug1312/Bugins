import { Component } from '@angular/core';
import { Plugin } from '../../components/plugin-card/plugin-card.component';

@Component({
  selector: 'app-blockbench',
  templateUrl: './blockbench.component.html',
  styleUrls: ['./blockbench.component.css']
})
export class BlockbenchComponent {

   plugins: Plugin[] = [
    {
      title: "DMJavaJSON",
      image: "fas fa-bug",
      imageType: "fontawesome",
      description: "Imports and Exports the JavaJSON model format found in various mods",
      moreInfo: "https://bug.swdteam.com",
      downloadURL: "https://bug.swdteam.com",
    },
    {
      title: "Cardinal",
      image: "border_outer",
      imageType: "google",
      description: "Adds in all cardinal directions on the grid and renders them on-top of everything while facing you",
      moreInfo: "https://www.blockbench.net/plugins/cardinal",
      fileName: "cardinal.js",
      downloadURL: "plugins/files/cardinal.js",
    },
    {
      title: "Blocky Forever",
      image: "assets/icons/blocky.webp",
      imageType: "url",
      description: "Brings JannisX11's April Fools Blocky feature back into BlockBench!",
      moreInfo: "",
      fileName: "block_forever.js",
      downloadURL: "plugins/files/blocky_forever.js",
    },
    {
      title: "Techne Cube",
      image: "view_in_ar",
      imageType: "google",
      description: "Adds the classic Techne wood block to the scene",
      moreInfo: "",
      fileName: "techne_cube.js",
      downloadURL: "plugins/files/techne_cube.js",
    },
    {
      title: "Random Colour",
      image: "fas fa-palette",
      imageType: "fontawesome",
      description: "Randomly colors selected cubes with this handy new tool!",
      moreInfo: "",
      fileName: "random_colour_tool.js",
      downloadURL: "plugins/files/random_colour_tool.js",
    },
    {
      title: "MDL Exporter",
      image: "assets/icons/mdl.webp",
      imageType: "url",
      description: "Export Dalek Mod's old MDL format directly from BlockBench!",
      moreInfo: "/docs/mdl",
      fileName: "Bugin.js",
      downloadURL: "plugins/files/Bugin.js",
    },
    {
      title: "BOBJ Importer (Outdated)",
      image: "insert_drive_file",
      imageType: "google",
      description: "Allows you to import obj files before BlockBench's 4.0 Update (A few steps necessary to set up)",
      moreInfo: "",
      fileName: "bobj_importer.js",
      downloadURL: "plugins/files/bobj_importer.js",
    },
    {
      title: "Mo' Shapes (Outdated)",
      image: "fas fa-shapes",
      imageType: "fontawesome",
      description: "Adds 'illegal' shapes to Blockbench for you to show your friends your crazy side!\nCreated before BlockBench's 4.0 Update",
      moreInfo: "/docs/moshapes",
      fileName: "mo_shapes.js",
      downloadURL: "plugins/files/mo_shapes.js",
    },
  ];
  

}
