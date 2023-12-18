import { Component , Output , EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,Router, RouterModule} from '@angular/router';
import { FormsModule , FormGroup ,ReactiveFormsModule ,FormControl , FormBuilder} from '@angular/forms';
import { StartGameComponent } from '../start-game/start-game.component';
import { GameService } from "../game.service"


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RouterOutlet , FormsModule , ReactiveFormsModule ,RouterModule , StartGameComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  constructor(private formBuilder: FormBuilder ,private router: Router , private GameService: GameService){}
  first: boolean = false;
  second: boolean = false;

  @Output() enterSubmit = new EventEmitter<FormGroup>();

  form !:FormGroup;
  ngOnInit(): void{
    this.form = this.formBuilder.group({
      gamerFirst: [''],
      gamerSecond: ['']
    });
  }

  onClick1(){
    this.first = true;
    if (this.canStartGame()) {
      this.enterSubmit.emit(this.form.value);
      this.GameService.getGamers(this.form.value.gamerFirst , this.form.value.gamerSecond).subscribe();
      this.router.navigateByUrl('startGame');
    }
  }

  onClick2(){
    this.second = true;
    if (this.canStartGame()) {
      this.enterSubmit.emit(this.form.value)
      this.GameService.getGamers(this.form.value.gamerFirst , this.form.value.gamerSecond).subscribe();
      this.router.navigateByUrl('startGame');
    }
  }

  canStartGame() {
    return this.first && this.second;
  }
}

