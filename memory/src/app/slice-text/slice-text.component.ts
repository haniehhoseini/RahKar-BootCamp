import { Component } from '@angular/core';
import { MemoryService } from '../memory.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slice-text',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './slice-text.component.html',
  styleUrl: './slice-text.component.scss'
})
export class SliceTextComponent {

  constructor(private memoryService:MemoryService) {}
  sampleData!: string ;

  ngOnInit(): void {
    this.memoryService.readtext().subscribe(data=>{
      this.sampleData = data[0][0].textMemory
    })
    
  }

}
