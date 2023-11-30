import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { TodoComponent } from './todo/todo.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { AbserverComponent } from './abserver/abserver.component';


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
                path : "showAccount",
                component : ShowAccountComponent,
            },
            {
                path : "ToDo",
                component : TodoComponent,
            },
            {
                path : "ArrayForm",
                component: ArrayFormComponent,
            },
            {
                path : "mywebsite",
                loadComponent: () => import ("./mywebsite/mywebsite.component")
                                             .then((m) => m.MywebsiteComponent)
            },
            {
                path : "abserver",
                component : AbserverComponent,
            }
        ]
    }
];
