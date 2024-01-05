import { Component ,  Output , EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder , private authService:AuthService , private router: Router){}

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

    this.authService.login(this.form.value).subscribe(res =>{
      this.authService.username = this.form.value.username;
      
      
      this.authService.getToken(res);
      if(res){
        this.router.navigateByUrl('transaction');
      }
      
    })
  }

  register(){
    this.router.navigateByUrl('register');
  }
}
