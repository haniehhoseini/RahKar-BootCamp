import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule, RouterOutlet , RouterModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  constructor(private router: Router){} 

  menuItems: any[] = [
    {
      title: 'products',
      link: 'products',
    },
    {
      title: 'main Page',
      link: '',
    }
  ]

  onClick(link: string) {
    this.router.navigateByUrl(link);
  }

  onClickLogin() {
    this.router.navigateByUrl('login');
  }
}
