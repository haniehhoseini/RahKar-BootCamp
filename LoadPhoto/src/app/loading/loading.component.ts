import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  constructor(private uploadService: UploadService){}

  allPhotos: any = [];

  ngOnInit(): void {
    this.uploadService.getPhoto().subscribe(res =>{
      console.log(res);
      this.allPhotos = res;
      
    });
  }

}
