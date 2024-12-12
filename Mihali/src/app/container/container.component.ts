import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule,MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  namesCar: string[];
  constructor() {
    this.namesCar = ['Escavatore',
    'Pala gommata',
    'Gru cingolata',
    'Betoniera',
    'Trivella',
    'Rullo compressore',
    'Piattaforma aerea',
    'Carroponte',
    'Fresa stradale',
    'Bulldozer']
  }
  ngOnInit(){
  }


}
