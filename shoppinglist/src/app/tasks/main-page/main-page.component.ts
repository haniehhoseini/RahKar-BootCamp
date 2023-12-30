import { Component , inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { EachItemsComponent } from '../each-items/each-items.component';
import { ITaskRequest } from '../typings/task-request.model';
import { ITask } from '../typings/task.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule , FormsModule , ReactiveFormsModule , EachItemsComponent ,FormsModule , ReactiveFormsModule ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  
  taskList !: ITask[] ;
  

  fb = inject(FormBuilder)
  constructor(private taskService: TaskService){
    this.allItems();
  }

  taskForm = this.fb.group({
    title: ['']
  })
  
  Enter(){
    this.taskService.createTask(this.taskForm.value as ITaskRequest)
    .subscribe((res) => console.log(res));

    this.taskForm.reset()
    this.allItems();
  }
  
  allItems(){
    this.taskService.readTask().subscribe( (task: ITask[]) =>{
    this.taskList = task;
 
    })
  }

  onDeleteTask(id: number){
    this.taskService.deleteTask(id).subscribe(
      (message) => {
        console.log(message ='Task deleted successfully');
        this.allItems();
      }
    );
  }
  
  onEditTask(id: number){
    
    const {title} = this.taskForm.value as ITaskRequest
    
    let change = {
      id:id,
      title:title
    }
    
    this.taskService.updateTask(change)
    .subscribe((res) => {
      console.log(res);
      this.allItems();
    });
  }

  onDoneTask(id: number){

    this.taskService.doneTask(id).subscribe(
      (res) => console.log(res)
    );
    this.allItems();
  }
}
