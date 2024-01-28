import { Injectable , inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class PayService{
    http = inject(HttpClient);

    pay(data:any):Observable<any>{
        return this.http.post("http://localhost:5555/api/pay" , { "userID": data });
    }

    baghiePol(data:any):Observable<any>{
        return this.http.post("http://localhost:5555/api/baghiePol", { "userID": data }); 
    }
}