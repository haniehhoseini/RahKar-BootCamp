import { Component } from '@angular/core';
import { FormGroup , ReactiveFormsModule , FormsModule , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { BuyService } from './buy.service';
import { CommonModule } from '@angular/common';
import { ITask } from './table.model';
import { ITaskPay } from './table1.model';
import { authService } from '../auth/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [  CommonModule ,ReactiveFormsModule , FormsModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.scss'
})
export class BuyComponent {

  constructor(private router: Router , private formBuilder: FormBuilder , private buyService: BuyService , private authService: authService) {}
  form !: FormGroup;

  historyBuy !: ITask[] ;
  historyPay !: ITaskPay[] ;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id:[0],
      name: [''],
      amount:['']
    });
    this.allItems();
  }
  
  allItems(){
    const  id  = this.authService.idDecode.id;
    this.buyService.historyBuy(id).subscribe(res =>{
      this.historyBuy = res;
    })
    this.buyService.historyPay(id).subscribe(res =>{
      this.historyPay = res;
    })
  }

  buy(){
    this.router.navigateByUrl('buy');
    this.form.patchValue({
      id: this.authService.idDecode.id
    })
    console.log(this.authService.idDecode.id);
    
    this.buyService.pay(this.form.value).subscribe(res =>{})
    this.allItems();
  }
  pay(){
    this.router.navigateByUrl('pay');
  }
  register(){
    this.router.navigateByUrl('register');
  }

}
