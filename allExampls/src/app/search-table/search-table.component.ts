import { Component , EventEmitter ,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule , ReactiveFormsModule  ,FormGroup , FormBuilder} from '@angular/forms';
import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'app-search-table',
  standalone: true,
  imports: [CommonModule ,SearchPipe, FormsModule , ReactiveFormsModule ,RouterOutlet , RouterModule],
  templateUrl: './search-table.component.html',
  styleUrl: './search-table.component.scss'
})
export class SearchTableComponent {

  @Output() enterSubmit = new EventEmitter<FormGroup>();

  form !:FormGroup;
  user: any[] = [];
  ngOnInit(): void{
    this.form = this.formBuilder.group({
      Fname: [''],
      Lname: [''],
      phone: [''],
      email: ['']
    });
  }
  

  constructor(private formBuilder: FormBuilder){}

  onClick(){
    this.enterSubmit.emit(this.form.value);
    
    
    this.user.push({
      
        Fname: this.form.value.Fname,
        Lname: this.form.value.Lname,
        phone: this.form.value.phone,
        email: this.form.value.email
     
    });
  }

  DeleteItem(index: number):void {
    this.user.splice(index, 1);
    
  }

  Searchtext = '';
}
