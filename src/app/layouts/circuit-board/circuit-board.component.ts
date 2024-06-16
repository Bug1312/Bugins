import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-circuit-board',
  templateUrl: './circuit-board.component.html',
  styleUrls: ['./circuit-board.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CircuitBoardLayout {

}
