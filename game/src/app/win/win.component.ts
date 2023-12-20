import { Component } from '@angular/core';
import { winnerService } from '../winner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-win',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './win.component.html',
  styleUrl: './win.component.scss'
})
export class WinComponent {
  constructor(private winnerService : winnerService){}

  winner : any = [];
  win : any = [];


  ngOnInit(): void {
    this.winner = this.winnerService.getWinner();
    console.log(this.winner);
    this.win.push({
      winnerName: this.winner.winnerName,
      loserName: this.winner.loserName
    });
    
  }

}
