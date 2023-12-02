import { Component } from '@angular/core';
import { productService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterModule , Router } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterOutlet , RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  products: any[] = [];
  
  
  constructor(private productService : productService ,private router: Router){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  onClick(id: any){
    this.productService.getProductById(id);
    this.router.navigateByUrl(`details/${id}`);
    
  }

}
