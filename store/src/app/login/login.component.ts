import { Component , Output , EventEmitter} from '@angular/core';
import { FormsModule , ReactiveFormsModule  ,FormGroup , FormBuilder} from '@angular/forms';
import { authService } from '../auth.service';
import { RouterOutlet , RouterModule , Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule , RouterOutlet , RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @Output() enterSubmit = new EventEmitter<FormGroup>();

  form !:FormGroup;
  user: any[] = [];
  
  isLoginIn : boolean = false;

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      Username: [''],
      Password: ['']
    });

    this.authService.isLogin.subscribe((data: boolean) => {
      if (data) {
        this.router.navigateByUrl('');
      }
    })
  }
  
  constructor(private formBuilder: FormBuilder, private authService: authService ,private router: Router){}

  onClick(){
    this.enterSubmit.emit(this.form.value);
    let u = {
      username: this.form.value.Username,
      password: this.form.value.Password,
    }
    
     
    this.authService.add(u);
  }

}
