import { Component , Input , Output , EventEmitter} from '@angular/core';
import { ITask } from '../typings/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-each-items',
  standalone: true,
  imports: [CommonModule , FormsModule , ReactiveFormsModule],
  templateUrl: './each-items.component.html',
  styleUrl: './each-items.component.scss'
})
export class EachItemsComponent {

  @Input() task!: ITask;

 
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() done = new EventEmitter();
}
