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
  data!: any[];

  ngOnInit(): void {
    this.readMemoryInTable();
  }
  readMemoryInTable(){
    this.memoryService.readtext().subscribe(data=>{
      this.data = Array.isArray(data) && data.length === 2 ? data[0] : data;
      console.log(this.data);
    })
  }
  readMemoryInTextArea(){

  }

  deleteMemory(){
    
  }

}
