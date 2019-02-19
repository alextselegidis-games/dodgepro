/**
 * This file is part of Dodgepro.
 *
 * Dodgepro is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Dodgepro is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Dodgepro.  If not, see <https://www.gnu.org/licenses/>.
 */

import Phaser from 'phaser';
import BootScene from './scenes/Boot';
import SplashScene from './scenes/Splash';
import GameMenuScene from './scenes/GameMenu';
import GameOverScene from './scenes/GameOver';
import GameCompletedScene from './scenes/GameCompleted';
import MenuScene from './scenes/Menu';
import AboutScene from './scenes/About';
import config from './config';
import {LevelScenes} from './core/LevelManager';

const gameConfig = Object.assign(config, {
    scene: [
        BootScene,
        SplashScene,
        MenuScene,
        GameMenuScene,
        GameOverScene,
        GameCompletedScene,
        AboutScene,
        ...LevelScenes
    ]
});

class Game extends Phaser.Game {
    constructor() {
        super(gameConfig);
    }
}

window.game = new Game();
