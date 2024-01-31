import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { MemoryService } from '../memory.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})

export class TextAreaComponent {
  constructor(private formBuilder:FormBuilder , private memoryService:MemoryService , private router:Router){}
  form !: FormGroup;
  alert: boolean = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text:['']
    })
  }
  submit(){
    this.memoryService.sendtext(this.form.value).subscribe(res =>{
      console.log(res);
      if(res){
        this.alert = true;
      }
    });
  }
  edit(){
    if (this.memoryService.textMemoryBool) {
      const dataChanged = {
        id: this.memoryService.textMemoryID,
        textMemory: this.form.value.text
      }
      this.memoryService.editText(dataChanged).subscribe(() =>{
        this.router.navigateByUrl('list');
      });
    }
    
  }

}
