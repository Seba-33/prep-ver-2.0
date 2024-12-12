import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent {
  @Input() TipoMacchina: string = "";
  namesPezzi: string[];
  constructor() {
    this.namesPezzi = ['Bulloni', 'Viti', 'Ferro'];
  }
  ngOnInit(){
  }
}
