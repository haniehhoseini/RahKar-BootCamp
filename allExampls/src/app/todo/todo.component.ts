import { Component ,Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule , RouterOutlet , RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

    
  textColor : string = 'blue';

  list : any = '';

  menuListItem: any [] = [];
  menuDelete: any[] = [];

  errorItems: boolean[] = [];

  @Output() mylist = new EventEmitter();

  WriteMyList(write : any){
    this.list =write.target.value;

  }
  OnClick(){
    
    // this.mylist.emit(this.list);
    this.menuListItem.push(this.list);
    
  }

  deleteTodo(index: number):void {
    this.menuListItem.splice(index, 1);
    this.errorItems.splice(index,1);
  }

  ErrorTodo(index: number):void{
    this.errorItems[index] = !this.errorItems[index];
  }

}
