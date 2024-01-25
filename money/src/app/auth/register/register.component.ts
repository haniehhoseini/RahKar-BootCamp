import { Component , Output , EventEmitter } from '@angular/core';
import { FormBuilder , FormsModule , ReactiveFormsModule , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private formBuilder:FormBuilder , private router:Router , private authService: authService){}

  form !: FormGroup;
  @Output() enter = new EventEmitter<FormGroup>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:[''],
      password:[''],
      name:['']
    })
  }
  register(){
    this.enter.emit(this.form.value);

    this.authService.register(this.form.value).subscribe(res =>{
      if(res){
        this.router.navigateByUrl('login');
      }
    })
  }
}
