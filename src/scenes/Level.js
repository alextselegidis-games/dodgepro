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
import {levelScene} from '../core/LevelManager';

export default class extends Phaser.Scene {
    constructor(config) {
        super(config);

        this.progress = 0;
    }

    createCursors() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    createGameMenuBar() {
        this.add.text(5, 5, 'Dodgepro', {
            font: '32px Rajdhani, sans-serif',
            fill: '#ffffff'
        });

        this.add.text(360, 5, 'Level ' + this.config.level, {
            font: '32px Rajdhani, sans-serif',
            fill: '#ffffff'
        });

        const menu = this.add.text(700, 5, 'Menu', {
            font: '32px Rajdhani, sans-serif',
            fill: '#ffffff'
        });

        menu.on('pointerup', () => {
            this.scene.setVisible(false);
            this.scene.pause(levelScene());
            this.scene.launch('GameMenuScene');
        });

        menu.setInteractive();
    }

    createPlayer() {
        this.player = this.physics.add.sprite(400, 50, 'robot');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('robot', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{key: 'robot', frame: 4}],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('robot', {start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });
    }

    updatePlayer() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160);
        }
    }

    updateProgress() {
        this.progress++;
    }

    onHitObject(player, object) {

    }
}