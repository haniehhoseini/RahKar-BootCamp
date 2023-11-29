import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { BlogComponent } from './blog/blog.component';
import { TodoComponent } from './todo/todo.component';
import { ArrayFormComponent } from './array-form/array-form.component';

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
            },
            {
                path : "ToDo",
                component : TodoComponent,
            },
            {
                path : "ArrayForm",
                component: ArrayFormComponent,
            }
        ]
    }
];
