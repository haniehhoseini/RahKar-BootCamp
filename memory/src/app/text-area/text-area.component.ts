import { CommonModule } from '@angular/common';
import { Component , EventEmitter , Output } from '@angular/core';
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
  @Output() enterSubmit = new EventEmitter<FormGroup>
  form !: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = this.formBuilder.group({
    text:['']
  })
  }
  submit(){
    this.enterSubmit.emit(this.form.value);
    console.log(this.form.value);
    
    this.memoryService.sendtext(this.form.value).subscribe( (res) =>{

    });
  }

}
