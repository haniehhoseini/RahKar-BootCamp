import { Component , Output , EventEmitter } from '@angular/core';
import { FormGroup , ReactiveFormsModule , FormsModule , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { BuyService } from './buy.service';
import { CommonModule } from '@angular/common';
import { ITask } from './table.model';
import { ITaskPay } from './table1.model';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [  CommonModule ,ReactiveFormsModule , FormsModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.scss'
})
export class BuyComponent {
  @Output() enter = new EventEmitter<FormGroup>();

  constructor(private router: Router , private formBuilder: FormBuilder , private buyService: BuyService) {}
  form !: FormGroup;

  historyBuy !: ITask[] ;
  historyPay !: ITaskPay[] ;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      amount:['']
    });
    this.allItems();
  }
  
  allItems(){
    this.buyService.historyBuy().subscribe(res =>{
      this.historyBuy = res;
      console.log(res);
      
    })
    this.buyService.historyPay().subscribe(res =>{
      this.historyPay = res;
      console.log(res);
      
    })
  }

  buy(){
    this.enter.emit(this.form.value);
    this.buyService.pay(this.form.value).subscribe(res =>{})
    this.allItems();
  }

}
