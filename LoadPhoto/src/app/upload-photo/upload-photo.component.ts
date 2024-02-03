import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
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

  constructor(private uploadService:UploadService , private formBuilder: FormBuilder){}
  selectedFile!: File;
  form !: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Title:[''],
      PhotoName:['']
    });
  }

  SelectedFile(event: any){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  UploadPhoto(): void {
    this.form.patchValue({
      PhotoName: this.selectedFile.name
    })
    console.log(this.form.value);
    
    if (this.selectedFile){
      this.uploadService.SendPhoto(this.selectedFile).subscribe(res => {
          console.log('File uploaded successfully:', res);
      });
      this.uploadService.SaveInDatabase(this.form.value).subscribe(res => {
        console.log('File Save successfully:' , res);
        
      });
    }
  }
  
}
