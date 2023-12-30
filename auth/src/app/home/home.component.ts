import { Component, inject  } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loginService = inject(LoginService)

  user = this.loginService.username;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.loginService.username);
    
  }
  
}
