import { Injectable , inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class PayService{
    http = inject(HttpClient);

    userID :string = '';

    pay(amount:any):Observable<any>{
        const data = {
            userID: this.userID, 
            amount
        };
        console.log(data);
        
        return this.http.post("http://localhost:5555/api/pay" , data);
    }
}