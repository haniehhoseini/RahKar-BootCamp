import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable ,  of} from 'rxjs';



@Injectable({
    providedIn: "root"
})
export class productService {

    private allProducts = new BehaviorSubject<any[]>([]);
    private productDescription = new BehaviorSubject<string>('');

    constructor() {
        this.initializeProducts();
    }

    getAllProducts() {
        return this.allProducts.asObservable();
    }

    getProductById(id: number): Observable<string> {
        const foundProduct = this.allProducts.value.find(p => p.id === id);
      
        if (foundProduct) {
            
            this.productDescription.next(foundProduct.description);
            return this.productDescription.asObservable();
        } else {
          
          return of('');
        }
    }
      

    private initializeProducts() {
        this.allProducts.next([
        {
            id: 1 ,
            name: 'iphone14pro',
            img: './assets/iphone14.jpg',
            description: 'Experience the future with the iPhone 14 Pro. Boasting a stunning design, powerful A15 chip, and an advanced camera system, it redefines what a smartphone can do. Enjoy a vibrant Super Retina XDR display, enhanced low-light photography, and 5G connectivity for seamless experiences.'
        },
        {
            id: 2,
            name: 'iphone13pro',
            img: './assets/iphone13.jpg',
            description: 'Elevate your mobile experience with the iPhone 13 Pro. Featuring the A15 Bionic chip, ProMotion display, and Pro camera system, it delivers unparalleled performance. Capture stunning photos and videos with ProRAW and ProRes capabilities. Get ready to explore the next level of innovation'
        },
        {
            id: 3,
            name: 'iphone12pro',
            img: './assets/iphone12.jpg',
            description: 'Discover the excellence of the iPhone 12 Pro. With 5G support, Ceramic Shield front cover, and the powerful A14 Bionic chip, its a device built for speed and durability. The Pro camera system opens up creative possibilities, offering Night mode, Deep Fusion, and HDR video recording.'
        },
        {
            id: 4,
            name: 'iphone11pro',
            img:'./assets/iphone11.jpg',
            description: 'Step into professional-grade performance with the iPhone 11 Pro. Powered by the A13 Bionic chip, it delivers remarkable speed and efficiency. The triple-camera system captures breathtaking photos and videos, while features like Night mode and Deep Fusion ensure stunning results in any lighting condition.'
        }]); 
    }   
}