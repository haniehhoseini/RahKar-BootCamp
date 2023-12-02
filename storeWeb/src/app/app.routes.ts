import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { DetailsOfProductsComponent } from './details-of-products/details-of-products.component';

export const routes: Routes = [
    {
        path: 'mainPage',
        component: MainpageComponent,
    },
    {
        path: 'products',
        loadComponent: () => import ("./products/products.component")
                                    .then((m) => m.ProductsComponent),
    },    
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'details/:id',
        component: DetailsOfProductsComponent
    }
];