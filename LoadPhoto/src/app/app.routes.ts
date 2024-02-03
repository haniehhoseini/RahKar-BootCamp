import { Routes } from '@angular/router';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { ShowPhotosComponent } from './show-photos/show-photos.component';

export const routes: Routes = [
    {
        path: 'upload',
        component: UploadPhotoComponent
    },
    {
        path: 'show',
        component: ShowPhotosComponent
    }
];
