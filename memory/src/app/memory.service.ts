import { HttpClient , HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class MemoryService{
    http = inject(HttpClient);
    textMemory : any;
    textMemoryID : any;
    textMemoryBool : boolean = false;

    sendtext(data:any):Observable<any>{
        return this.http.post("http://localhost:5555/api/create" , data)
    }

    readtext():Observable<any>{
        return this.http.get("http://localhost:5555/api/read")
    }

    watchText(data:any):Observable<any>{
        return this.http.post("http://localhost:5555/api/readMemoryWithSpecificID", data);
    }

    editText(data:any):Observable<any>{
        return this.http.post("http://localhost:5555/api/edit", data);
    }

    deleteText(data:any):Observable<any>{
        console.log(data);
        
        return this.http.post("http://localhost:5555/api/delete", data);
    }
}