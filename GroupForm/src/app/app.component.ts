import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule , FormGroup ,ReactiveFormsModule ,FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , FormsModule , ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'groupForm';

  Username = new FormControl();
  Password = new FormControl();

  form = new FormGroup({
    Username: new FormControl(),
    Password: new FormControl(),
  });

  onClick(){
    console.log(this.form.value);
    console.log(this.Username.value);
    console.log(this.Password.value);
   
  }
}
