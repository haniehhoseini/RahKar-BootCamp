import { Component } from '@angular/core';
import { MemoryService } from '../memory.service';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slice-text',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './slice-text.component.html',
  styleUrl: './slice-text.component.scss'
})
export class SliceTextComponent {

  constructor(private memoryService:MemoryService , private router:Router) {}
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
  readMemoryInTextArea(id:any){
    this.memoryService.textMemoryID = id;
    this.memoryService.watchText({id}).subscribe(data =>{
      this.memoryService.textMemory = data;
      this.memoryService.textMemoryBool = true;
      this.router.navigateByUrl('textArea');
    })
  }

  deleteMemory(id:any){
    this.memoryService.deleteText({id}).subscribe(()=>{
      this.router.navigateByUrl('list');
    });
  }

}
