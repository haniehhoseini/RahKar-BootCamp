import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UploadService {
    http = inject(HttpClient);

    SendPhoto(data:any): Observable<any> {
        return this.http.post("http://localhost:3333/api/send", data);
    }

    getPhoto(): Observable<any> {
        return this.http.get("http://localhost:3333/api/get");
    }
}