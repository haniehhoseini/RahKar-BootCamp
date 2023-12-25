import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

export const TaskRoutes: Routes = [
    {
        path:"",
        pathMatch:"full",
        redirectTo:"index"
    },
    {
        path: 'mainPage',
        component: MainPageComponent
    }
];