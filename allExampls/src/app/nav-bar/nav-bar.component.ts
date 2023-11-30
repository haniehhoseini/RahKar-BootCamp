import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , RouterOutlet ,Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule , RouterModule , RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(private router: Router){}  

  menuItems: any[] = [
    {
      title: 'search in table',
      link: 'navbar/SearchTable',
    },
    {
      title: 'show account',
      link: 'navbar/showAccount',
    },
    {
      title: 'todoList',
      link: 'navbar/ToDo',
    },
    {
      title : 'ArrayForm',
      link : 'navbar/ArrayForm',
    },
    {
      title : 'My Website',
      link : 'navbar/mywebsite',
    },
    {
      title : 'Abserver',
      link : 'navbar/abserver',
    }
   ]
   onClick(link: string){
    this.router.navigateByUrl(link);
  
   }
}
