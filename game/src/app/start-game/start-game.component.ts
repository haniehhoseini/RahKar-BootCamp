import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss'
})
export class StartGameComponent {
  constructor(private GameService: GameService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.Gamers();
  }
  Gamers(){
    this.GameService.getNameOfGamers().subscribe(data =>{
      console.log(data);
      
    })
  }
}
