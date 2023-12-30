import { Component, Output , EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule , FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder , private loginService:LoginService , private router: Router){}

  @Output() enterSubmit = new EventEmitter<FormGroup>
  form !: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = this.formBuilder.group({
      username:[''],
      password:[''],
      fname:[''],
      lname:['']
    })
  }


  register(){
    this.enterSubmit.emit(this.form.value);
    this.loginService.register(this.form.value).subscribe(res =>{
      if (res) {
        this.router.navigateByUrl('login');
      }
    });
    
  }
}
