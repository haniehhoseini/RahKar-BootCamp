import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup , FormsModule , FormBuilder , ReactiveFormsModule ,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , FormsModule , ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tableWithForm';

  constructor(private formBuilder: FormBuilder){
    console.log("this is Constractors");
  }

  form !:FormGroup;
  ngOnInit(): void{
    
    this.form = this.formBuilder.group({
    firstName: ['' , Validators.required],
    lastName: [''],
    phone:[''],
    email:['']
    });
  }  
}
