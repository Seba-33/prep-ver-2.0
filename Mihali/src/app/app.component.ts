import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { MacchinaComponent } from './macchina/macchina.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ContainerComponent,MacchinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mihali';
}
