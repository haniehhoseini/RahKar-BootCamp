import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { BlogComponent } from './blog/blog.component';


export const routes: Routes = [
    {
        path:"navbar",
        component: NavBarComponent,
        children :[
            {
                path :"SearchTable",
                component : SearchTableComponent,
            },
            {
                path : "Blog",
                component : BlogComponent,
            }
        ]
    }
];
