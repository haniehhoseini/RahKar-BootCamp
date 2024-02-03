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

  constructor(private uploadService:UploadService){}
  selectedFile!: File;


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile){
      this.uploadService.SendPhoto(this.selectedFile).subscribe(res => {
          console.log('File uploaded successfully:', res);
        });
    }
  }
  
}
