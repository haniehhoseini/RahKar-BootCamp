import { Routes } from '@angular/router';
import { TextAreaComponent } from './text-area/text-area.component';
import { SliceTextComponent } from './slice-text/slice-text.component';

export const routes: Routes = [
    {
        path:'textArea',
        component: TextAreaComponent
    },
    {
        path: 'list',
        component: SliceTextComponent
    }
];
