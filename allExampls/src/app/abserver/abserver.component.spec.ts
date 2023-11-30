import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbserverComponent } from './abserver.component';

describe('AbserverComponent', () => {
  let component: AbserverComponent;
  let fixture: ComponentFixture<AbserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbserverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
