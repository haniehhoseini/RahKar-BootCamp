import { Routes } from '@angular/router';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { LoadingComponent } from './loading/loading.component';

export const routes: Routes = [
    {
        path: 'upload',
        component: UploadPhotoComponent
    },
    {
        path: 'load',
        component: LoadingComponent
    }
];
