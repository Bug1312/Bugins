import { Component } from '@angular/core';
import { Plugin } from 'src/app/components/plugin-card/plugin-card.component';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css']
})
export class MinecraftComponent {

  plugins: Plugin[] = 
  [{"title":"Dalek Mod","image":"https://media.forgecdn.net/avatars/thumbnails/601/706/256/256/637981122306949610.png","imageType":"url","description":"Dalek Mod is a Doctor Who oriented Mod I helped work on in the years 2020-2023 starting from simple assets to being one of the main developers","moreInfo":"https://swdteam.com/p/dalek-mod","downloadURL":"https://swdteam.com/p/dalek-mod"},{"title":"Ballooning","sharp":true,"image":"https://cdn.modrinth.com/data/J1BCbrXI/1a148a97c0ba44e714afeaada47491ce989460fd.png","imageType":"url","description":"A small mod made for ModFest: Carnival that turns anything lead-able into a balloon","moreInfo":"https://modrinth.com/mod/ballooning","downloadURL":"https://modrinth.com/mod/ballooning"},{"title":"Magician's Hat","sharp":true,"image":"https://cdn.modrinth.com/data/UeEP05XD/82e16ffc93ed97674a27c2c5780cea1c09e4a7d3.png","imageType":"url","description":"A small mod made for ModFest: Carnival that adds a hat used to magically store and expel items as well as become a fashion piece","moreInfo":"https://modrinth.com/mod/magicians_hat","downloadURL":"https://modrinth.com/mod/magicians_hat"}]
  ;

}
