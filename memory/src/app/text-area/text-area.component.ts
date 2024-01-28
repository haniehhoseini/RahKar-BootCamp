import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { MemoryService } from '../memory.service';


@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})

export class TextAreaComponent {
  constructor(private formBuilder:FormBuilder , private memoryService:MemoryService){}
  form !: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
    text:['']
  })
  }
  submit(){
    this.memoryService.sendtext(this.form.value).subscribe();
  }

}
