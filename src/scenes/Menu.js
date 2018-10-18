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

export default class extends Phaser.Scene {
    constructor() {
        super({key: 'MenuScene'});
    }

    create() {
        const style = {
            font: '64px Rajdhani',
            fill: '#7744ff'
        };

        const play = this.add.text(100, 100, 'Play ', style).setInteractive();

        play.on('pointerup', () => {
            this.scene.start('GameScene');
        });

        const about = this.add.text(100, 300, 'About ', style).setInteractive();

        about.on('pointerup', () => {
            this.scene.start('AboutScene');
        });

        const feedback = this.add.text(100, 500, 'Feedback ', style).setInteractive();

        feedback.on('pointerup', () => {
            window.open('https://example.org', '_blank');
        });
    }
}