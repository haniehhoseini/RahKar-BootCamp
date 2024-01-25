import { Component, Output , EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PayService } from './pay.service';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [FormsModule ,ReactiveFormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.scss'
})
export class PayComponent {

  @Output() enter = new EventEmitter<FormGroup>();

  constructor(private router: Router , private formBuilder: FormBuilder , private payService: PayService) {}
  form !: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: ['']
    });
  }
  
  pay(){
    this.enter.emit(this.form.value);

    this.payService.pay(this.form.value).subscribe(res =>{})
  }
}
