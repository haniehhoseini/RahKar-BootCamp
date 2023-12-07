import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {

  user: any[] = [];

  constructor(private productsService: ProductsService){}
  
  ngOnInit(): void {

    this.productsService.getProducts().subscribe({
      next:(data:any)=>{
        this.user = data;
        
      }
    });
    
  }
}
