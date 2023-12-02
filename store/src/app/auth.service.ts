import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})


export class authService {

    Username = ""
    Password = ""
    userAuth : any  = [
        {
            username: 'hanieh',
            password: '12345'
        },
        {
            username: 'atefeh',
            password: '11111'
        }
    ]
    
    isLogin = new Subject<boolean>();
    
    add(user: any): void {

        this.Username = user.username
        this.Password = user.password

        let findUser = this.userAuth.find((u: any) => u.username === user.username && u.password === user.password)
        if (findUser) this.isLogin.next(true)
        else this.isLogin.next(false)
    }

}