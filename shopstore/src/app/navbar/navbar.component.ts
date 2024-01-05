import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router:Router){}

  login(){
    this.router.navigateByUrl('login');
  }
  register(){
    this.router.navigateByUrl('register');
  }
  transaction(){
    this.router.navigateByUrl('transaction');
  }
  wallet(){
    this.router.navigateByUrl('wallet');
  }
}
