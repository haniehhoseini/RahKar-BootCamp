import { Component , OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [CommonModule , FormsModule ,ReactiveFormsModule , RouterModule ,RouterOutlet ],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss'
})
export class StartGameComponent implements OnInit {
  constructor(private gameService: GameService , private router:Router){}
  
  gamers: any = [];
  count: number = 0;
  score1: number = 0;
  score2: number = 0;

  ngOnInit(): void {
    this.Gamers();
  }
  

  Gamers(){
    this.gameService.getNameOfGamers().subscribe(data => {
      this.gamers.push({
        First: data.First,
        Second: data.Second
      });
    });
      
  }

  play(){
    this.count = Math.floor(Math.random() *6)+1;
    if(this.count >= 1 && this.count <= 3){
      this.score1++;
      if (this.score1 === 5) {
        this.router.navigateByUrl('win')
      }
    }else{
      this.score2++;
      if (this.score2 === 5) {
        this.router.navigateByUrl('win')
      }
    }
    
  }
}
