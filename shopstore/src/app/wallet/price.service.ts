import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class walletService {
    http = inject(HttpClient);

    price(data: any): Observable<any>{
        return this.http.post("http://localhost:4444/api/form/wallet",data)
    }
}