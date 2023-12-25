import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachItemsComponent } from './each-items.component';

describe('EachItemsComponent', () => {
  let component: EachItemsComponent;
  let fixture: ComponentFixture<EachItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EachItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
