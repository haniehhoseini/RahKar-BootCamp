import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PayService } from './pay.service';
import { authService } from '../auth/auth.service';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [FormsModule ,ReactiveFormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.scss'
})
export class PayComponent {

  constructor(private router: Router , private formBuilder: FormBuilder , private payService: PayService , private authService:authService) {}
  form !: FormGroup;

  baghiePol !:any;
  ngOnInit(): void {
    this.payService.baghiePol(this.authService.idDecode.id).subscribe(res =>{
      this.baghiePol = res;
    })
    this.form = this.formBuilder.group({
      id:[0],
      amount: ['']
    });
  }
  
  pay(){
    this.form.patchValue({
      id: this.authService.idDecode.id
    })
    this.payService.pay(this.form.value).subscribe(res =>{})
  }
  buy(){
    this.router.navigateByUrl('buy');
  }
}
