import { Component , Output ,EventEmitter, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  textColor : string = 'blue';

  list : any = '';
  menuListItem: any [] = [];
  menuDelete: any [] = [];
  
  errorItems: boolean[] = [];

  @Output() mylist = new EventEmitter();

  WriteMyList(write : any){
    this.list =write.target.value;

  }
  OnClick(){
    this.mylist.emit(this.list);
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
