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

export default class extends Phaser.Scene {
    constructor() {
        super({key: 'AboutScene'});
    }

    create() {
        const style = {
            font: '64px Rajdhani',
            fill: '#7744ff'
        };

        const content = `
        This is the about content
        with a new line
        `;

        this.add.text(100, 100, content, style);

        const back = this.add.text(100, 200, 'Back', style).setInteractive();

        back.on('pointerup', () => {
            this.scene.start('MenuScene');
        });
    }
}
