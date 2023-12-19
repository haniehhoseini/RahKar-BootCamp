import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-win',
  standalone: true,
  imports: [],
  templateUrl: './win.component.html',
  styleUrl: './win.component.scss'
})
export class WinComponent {
  constructor(private GameService: GameService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
