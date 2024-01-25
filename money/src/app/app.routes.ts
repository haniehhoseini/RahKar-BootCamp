import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PayComponent } from './pay/pay.component';
import { BuyComponent } from './buy/buy.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path : 'login',
        component: LoginComponent
    },
    {
        path: 'pay',
        component: PayComponent
    },
    {
        path: 'buy',
        component: BuyComponent
    }
];
