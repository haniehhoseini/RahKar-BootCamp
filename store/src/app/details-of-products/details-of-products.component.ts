import { Component, OnInit } from '@angular/core';
import { productService } from '../product.service';
import { RouterOutlet , RouterModule  ,ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details-of-products',
  standalone: true,
  imports: [RouterOutlet , RouterModule , CommonModule],
  templateUrl: './details-of-products.component.html',
  styleUrl: './details-of-products.component.scss'
})
export class DetailsOfProductsComponent implements OnInit{

  productDescription: string = '';

  constructor(private productService: productService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get("id")
    const numericId = id ? +id : 0;
    
     this.productService.getProductById(numericId).subscribe(desc => {
       this.productDescription = desc;
     });
  }


}
