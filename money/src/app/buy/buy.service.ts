import { Injectable , inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class BuyService{
    http = inject(HttpClient);

    userID :string = '';

    pay(nameAndAmount:any):Observable<any>{
        const data = {
            userID: this.userID, 
            amount: nameAndAmount.amount,
            name: nameAndAmount.name
        };
        return this.http.post("http://localhost:5555/api/buy" , data);
    }
    history():Observable<any>{
        console.log(this.userID);
        
        return this.http.post("http://localhost:5555/api/allPayment" , this.userID);
    }
}