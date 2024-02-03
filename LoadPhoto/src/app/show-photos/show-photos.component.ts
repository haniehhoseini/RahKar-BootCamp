import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-photos.component.html',
  styleUrl: './show-photos.component.scss'
})
export class ShowPhotosComponent {

  constructor(private uploadService: UploadService) {}

  imageUrls: string[] = [];
  ngOnInit(): void {
    this.loadImages();
  }
  loadImages(): void {
    this.uploadService.GetPhotos().subscribe(
      (imageNames: string[]) => {
        this.imageUrls = imageNames.map(imageName => 'http://localhost:3333/photo/' + imageName);
        console.log(this.imageUrls);
      });
  }
  

}
