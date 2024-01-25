import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { authService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  authService = inject(authService);
  constructor() {
    this.authService.checkLogin();
  }
}
