import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfProductsComponent } from './details-of-products.component';

describe('DetailsOfProductsComponent', () => {
  let component: DetailsOfProductsComponent;
  let fixture: ComponentFixture<DetailsOfProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOfProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
