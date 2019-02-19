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

import Phaser from 'phaser'
import {levelScene, resetLevel} from '../core/LevelManager';

export default class extends Phaser.Scene {
    constructor() {
        super({key: 'GameCompletedScene'});
    }

    create() {
        const headingStyle = {
            font: '64px Rajdhani',
            fill: '#ffffff'
        };

        const content = `Game Completed`;

        this.add.text(100, 100, content, headingStyle);

        const menuStyle = {
            font: '32px Rajdhani, sans-serif',
            fill: '#ffffff',
            align: 'center'
        };

        const mainMenu = this.add.text(400, 370, 'Main Menu', menuStyle).setInteractive().setOrigin(0.5, 0.5);

        mainMenu.on('pointerup', () => {
            this.scene.stop('GameCompletedScene');
            this.scene.start('MenuScene');
            resetLevel();
        });
    }
}
