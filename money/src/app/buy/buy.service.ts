import { Injectable , inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class BuyService{
    http = inject(HttpClient);

    
    pay(data:any):Observable<any>{
        return this.http.post("http://localhost:5555/api/buy" , data);
    }
    historyBuy(data:any):Observable<any>{
        return this.http.post("http://localhost:5555/api/allPayment" , { "userID": data });
    }

    historyPay(data:any):Observable<any>{
        return this.http.post("http://localhost:5555/api/allPaymentPay" , { "userID": data });
    }
}