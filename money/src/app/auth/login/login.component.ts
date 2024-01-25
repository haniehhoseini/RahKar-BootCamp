import { Component, Output , EventEmitter } from '@angular/core';
import { FormBuilder, FormsModule , ReactiveFormsModule , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from '../auth.service';
import { PayService } from '../../pay/pay.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule , ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private formBuilder:FormBuilder , private router:Router , private authService: authService , private payService:PayService){}

  form !: FormGroup;
  @Output() enter = new EventEmitter<FormGroup>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this.enter.emit(this.form.value);

    this.authService.login(this.form.value).subscribe(res =>{
      this.payService.userID = res.userId;
      this.authService.getToken(res.token);
      if(res){
        this.router.navigateByUrl('pay');
      }
      
    })
  }
}
