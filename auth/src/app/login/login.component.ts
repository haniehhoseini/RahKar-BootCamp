import { Component, Output , EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder , private loginService:LoginService , private router: Router){}

  @Output() enterSubmit = new EventEmitter<FormGroup>
  form !: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
    this.enterSubmit.emit(this.form.value);

    this.loginService.login(this.form.value).subscribe(res =>{
      this.loginService.username = this.form.value.username;
      
      this.loginService.getToken(res);
      if(res){
        this.router.navigateByUrl('home');
      }
      
    })
  }

  register(){
    this.router.navigateByUrl('register');
  }
}
