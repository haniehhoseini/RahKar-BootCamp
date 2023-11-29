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
      title: 'myBlog',
      link: 'navbar/Blog',
    },
    {
      title: 'todoList',
      link: 'navbar/ToDo',
    },
    {
      title : 'ArrayForm',
      link : 'navbar/ArrayForm',
    }
   ]
   onClick(link: string){
    this.router.navigateByUrl(link);
  
   }
}
