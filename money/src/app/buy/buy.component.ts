import { Component , Output , EventEmitter } from '@angular/core';
import { FormGroup , ReactiveFormsModule , FormsModule , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { BuyService } from './buy.service';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.scss'
})
export class BuyComponent {
  @Output() enter = new EventEmitter<FormGroup>();

  constructor(private router: Router , private formBuilder: FormBuilder , private buyService: BuyService) {}
  form !: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      amount:['']
    });
  }
  

  buy(){
    this.enter.emit(this.form.value);

    this.buyService.pay(this.form.value).subscribe(res =>{})
  }

}
