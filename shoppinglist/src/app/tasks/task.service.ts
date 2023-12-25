import { HttpClient , HttpHeaders} from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environment/environment.development';
import { ITaskRequest } from './typings/task-request.model';
import { ITask } from "./typings/task.model";

@Injectable({
    providedIn: 'root',
})

export class TaskService{

    baseUrl = environment.apiBaseUrl;
    http = inject(HttpClient);

    
    createTask(task: ITaskRequest): Observable<any> {
        
        return this.http.post(`${this.baseUrl}task`, task , {headers: new HttpHeaders({'Content-Type': 'application/json'})});
    }

    readTask():Observable<ITask[]>{

        return this.http.get<ITask[]>(`${this.baseUrl}task`);
    }

    updateTask(task: any): Observable<any> {
        
        return this.http.put(`${this.baseUrl}task/`, task);
    }

    deleteTask(id: number): Observable<any> {
        
        return this.http.delete(`${this.baseUrl}task/${id}`);
    }
}