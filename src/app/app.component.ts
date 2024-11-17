import { Component } from '@angular/core';
import { InputControllerComponent } from './input-controller/input-controller.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputControllerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'northern';
}
