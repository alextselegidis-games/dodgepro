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
            font: '32px Rajdhani, sans-serif',
            fill: '#ffffff',
            align: 'center'
        };

        const logo = this.add.image(400, 150, 'bigblackcode-logo').setOrigin(0.5, 0.5);
        logo.setScale(0.5);

        const play = this.add.text(400, 300, 'Play ', style).setInteractive().setOrigin(0.5, 0.5);

        play.on('pointerup', () => {
            this.scene.start('GameScene');
        });

        const about = this.add.text(400, 370, 'About ', style).setInteractive().setOrigin(0.5, 0.5);

        about.on('pointerup', () => {
            this.scene.start('AboutScene');
        });

        const feedback = this.add.text(400, 440, 'Feedback ', style).setInteractive().setOrigin(0.5, 0.5);

        feedback.on('pointerup', () => {
            window.open('https://example.org', '_blank');
        });
    }
}