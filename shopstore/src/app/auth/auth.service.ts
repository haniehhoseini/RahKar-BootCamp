import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class AuthService{
    http = inject(HttpClient);

    isLogin:boolean = false;
    username:string ='';     

    private readonly _authStorageToken : string = "authToken";

    login(data:any):Observable<any>{
        console.log(data);
        
        return this.http.post("http://localhost:4444/api/form",data , {headers: new HttpHeaders({"Content-Type": "Application/json"})})
    }
    register(data:any):Observable<any>{
        console.log(data);
        
        return this.http.post("http://localhost:4444/api/form/reg",data , {headers: new HttpHeaders({"Content-Type": "Application/json"})})
    }

    getToken(token:string){
        localStorage.setItem(this._authStorageToken, token);
        this.isLogin = true;
    }

    setToken():string{
        return localStorage.getItem(this._authStorageToken) as string;
    }

    checkLogin(){
        if (this.setToken()) {
            this.isLogin = true;
        }
    }

    decode(){
        
    }

}