import { Component , Output , EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule , FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder , private authService:AuthService , private router: Router){}

  @Output() enterSubmit = new EventEmitter<FormGroup>
  form !: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }


  register(){
    this.enterSubmit.emit(this.form.value);
    this.authService.register(this.form.value).subscribe(res =>{
      if (res) {
        this.router.navigateByUrl('login');
      }
    });
    
  }
}
