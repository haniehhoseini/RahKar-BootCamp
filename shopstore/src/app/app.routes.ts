import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletComponent } from './wallet/wallet.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'navbar',
        component: NavbarComponent
    },
    {
        path:'transaction',
        component: TransactionComponent
    },
    {
        path:'wallet',
        component: WalletComponent
    }
];
