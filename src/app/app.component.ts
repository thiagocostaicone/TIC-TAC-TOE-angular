import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from "./board/board.component";
import { SquareComponent } from './square/square.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent, SquareComponent, CommonModule, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
