import { Component } from '@angular/core';
import { UploadService } from './upload.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-photo',
  standalone: true,
  imports: [CommonModule , FormsModule , ReactiveFormsModule],
  templateUrl: './upload-photo.component.html',
  styleUrl: './upload-photo.component.scss'
})
export class UploadPhotoComponent {

  constructor(private uploadService:UploadService , private formBuilder:FormBuilder){}
   
  form !:FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      PhotoName:[''],
      urlPhoto:['']
    });
  }

  SendPhoto(){
    this.uploadService.SendPhoto(this.form.value).subscribe((res)=>{
      console.log(res);
    });
  }
  
}
