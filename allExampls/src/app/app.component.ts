import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterModule} from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchTableComponent } from './search-table/search-table.component';
import { BlogComponent } from './blog/blog.component';
import { TodoComponent } from './todo/todo.component';
import { ArrayFormComponent } from './array-form/array-form.component';









@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , RouterModule , ReactiveFormsModule , NavBarComponent ,SearchTableComponent , BlogComponent ,TodoComponent , ArrayFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'allExampls';
}
