import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DetailsOfProductsComponent } from './details-of-products/details-of-products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , RouterModule , ProductsComponent , MainpageComponent , DetailsOfProductsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storeWeb';

}
