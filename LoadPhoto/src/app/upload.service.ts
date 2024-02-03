import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UploadService {
    http = inject(HttpClient);

    SendPhoto(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('photo', file);
        return this.http.post("http://localhost:3333/api/send", formData);
    }

    SaveInDatabase(data:any): Observable<any>{
        return this.http.post("http://localhost:3333/api/save", data);
    }

    GetPhotos(): Observable<string[]> {
        return this.http.get<string[]>("http://localhost:3333/api/images");
      }

}