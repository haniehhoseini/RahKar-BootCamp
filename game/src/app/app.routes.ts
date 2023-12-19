import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StartGameComponent } from './start-game/start-game.component';
import { WinComponent } from './win/win.component';

export const routes: Routes = [
    {
        path: 'game',
        component: GameComponent
    },
    {
        path: 'startGame',
        component: StartGameComponent
    },
    {
        path: 'win',
        component: WinComponent
    }
];
