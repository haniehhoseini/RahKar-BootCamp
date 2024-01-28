import { Component } from '@angular/core';
import { FormBuilder, FormsModule , ReactiveFormsModule , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from '../auth.service';
import { PayService } from '../../pay/pay.service';
import { BuyService } from '../../buy/buy.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule , ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private formBuilder:FormBuilder , private router:Router , private authService: authService , private payService:PayService , private buyService: BuyService){}

  form !: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id:[0],
      email:[''],
      password:['']
    })
  }
  login(){

    this.authService.login(this.form.value).subscribe(res =>{
      this.authService.getToken(res);
      this.authService.idDecode = jwtDecode(res);
      
      if(res){
        this.router.navigateByUrl('buy');
        
      }
    })
  }
}
