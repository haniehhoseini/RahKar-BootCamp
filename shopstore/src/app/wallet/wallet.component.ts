import { Component , EventEmitter , Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { walletService } from './price.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [ CommonModule , ReactiveFormsModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  constructor(private formBuilder: FormBuilder , private walletService:walletService){}

  @Output() enterSubmit = new EventEmitter<FormGroup>
  form !: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      price:['']
    })
  }

  enter(){
    this.enterSubmit.emit(this.form.value);

    this.walletService.price(this.form.value).subscribe(res =>{
      this.walletService.price = this.form.value.price;
    })
  }
}
