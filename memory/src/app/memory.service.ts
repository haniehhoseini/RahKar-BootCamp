import { HttpClient , HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class MemoryService{
    http = inject(HttpClient);

    sendtext(data:any):Observable<any>{
        console.log(data);
        
        return this.http.post("http://localhost:5555/api/create" , data)
    }
}