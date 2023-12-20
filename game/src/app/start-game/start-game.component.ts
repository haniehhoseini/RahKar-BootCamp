import { Component , OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,Router, RouterModule} from '@angular/router';
import { winnerService } from '../winner.service';


@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [CommonModule , FormsModule ,ReactiveFormsModule , RouterModule ,RouterOutlet ],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss'
})
export class StartGameComponent implements OnInit {
  constructor(private gameService: GameService , private router:Router , private winnerService: winnerService){}
  
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
        const winnerName = this.gamers[0].First; 
        const loserName = this.gamers[0].Second;
        this.winnerService.setWinner({
          winnerName: winnerName,
          loserName: loserName
        });
        this.router.navigateByUrl('win');
      }
    }else{
      this.score2++;
      if (this.score2 === 5) {
        const winnerName = this.gamers[0].Second; 
        const loserName = this.gamers[0].First;
        this.winnerService.setWinner({
          winnerName: winnerName,
          loserName: loserName
        });
        this.router.navigateByUrl('win');
      }
    }
  }

}
