import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliceTextComponent } from './slice-text.component';

describe('SliceTextComponent', () => {
  let component: SliceTextComponent;
  let fixture: ComponentFixture<SliceTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliceTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
