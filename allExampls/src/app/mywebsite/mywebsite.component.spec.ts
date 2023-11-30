import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywebsiteComponent } from './mywebsite.component';

describe('MywebsiteComponent', () => {
  let component: MywebsiteComponent;
  let fixture: ComponentFixture<MywebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MywebsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MywebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
