import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // Marca el componente como standalone
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'MotosVelazquez Header';
}



