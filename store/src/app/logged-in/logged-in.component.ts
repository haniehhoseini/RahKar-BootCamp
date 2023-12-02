import { Component } from '@angular/core';
import { authService } from '../auth.service';


@Component({
  selector: 'app-logged-in',
  standalone: true,
  imports: [],
  templateUrl: './logged-in.component.html',
  styleUrl: './logged-in.component.scss'
})
export class LoggedInComponent {

  constructor(public authService: authService ){}
  
}
