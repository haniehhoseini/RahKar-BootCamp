import { Component } from '@angular/core';
import { MemoryService } from '../memory.service';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-slice-text',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './slice-text.component.html',
  styleUrl: './slice-text.component.scss'
})
export class SliceTextComponent {

  constructor(private memoryService:MemoryService , private formBuilder:FormBuilder) {}
  sampleData !: string[]  ;
  

  ngOnInit(): void {
    this.memoryService.readtext().subscribe(data=>{
      this.sampleData = data[0][0].textMemory
    })
    
  }

}
