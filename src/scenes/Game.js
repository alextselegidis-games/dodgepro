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
        super({key: 'GameScene'});
    }

    init() {
    }

    preload() {
        this.load.image('ground', 'assets/images/environment/ground.png');
        this.load.image('barrel-green', 'assets/images/objects/barrel-green.png');
        this.load.image('barrel-red', 'assets/images/objects/barrel-red.png');
        this.load.image('box', 'assets/images/objects/box.png');
        this.load.image('door-locked', 'assets/images/objects/door-locked.png');
        this.load.image('door-open', 'assets/images/objects/door-open.png');
        this.load.image('door-unlocked', 'assets/images/objects/door-unlocked.png');
        this.load.image('saw', 'assets/images/objects/saw.png');
        this.load.image('switch-green', 'assets/images/objects/switch-green.png');
        this.load.image('switch-red', 'assets/images/objects/switch-red.png');
    }

    create() {
        this.robot = this.physics.add.sprite(100, 450, 'robot');
        this.robot.setBounce(0.2);
        this.robot.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('robot', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'robot', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('robot', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.add.text(5, 5, 'Dodgepro', {
            font: '32px Rajdhani',
            fill: '#ffffff'
        });

        const menu = this.add.text(700, 5, 'Menu', {
            font: '32px Rajdhani',
            fill: '#ffffff'
        });

        menu.on('pointerup', () => {
            this.scene.pause('GameScene');
            this.scene.start('GameMenuScene');
        });

        menu.setInteractive();

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');

        this.objects = this.physics.add.group();
        var object = this.objects.create(16, 16, 'barrel-red');
        object.setBounce(1);
        object.setCollideWorldBounds(true);
        object.setVelocity(Phaser.Math.Between(-200, 200), 20);
        object.allowGravity = false;

        object = this.objects.create(16, 16, 'barrel-green');
        object.setBounce(1);
        object.setCollideWorldBounds(true);
        object.setVelocity(Phaser.Math.Between(-200, 200), 20);
        object.allowGravity = false;

        object = this.objects.create(16, 16, 'box');
        object.setBounce(1);
        object.setCollideWorldBounds(true);
        object.setVelocity(Phaser.Math.Between(-200, 200), 20);
        object.allowGravity = false;

        this.physics.add.collider(this.robot, this.platforms);
        this.physics.add.collider(this.objects, this.platforms);
        this.physics.add.collider(this.robot, this.objects, this.hitObject, null, this);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.robot.setVelocityX(-160);
            this.robot.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.robot.setVelocityX(160);
            this.robot.anims.play('right', true);
        } else {
            this.robot.setVelocityX(0);
            this.robot.anims.play('turn');
        }

        if (this.cursors.up.isDown) {
            this.robot.setVelocityY(-160);
        }
    }

    hitObject() {

    }

}
