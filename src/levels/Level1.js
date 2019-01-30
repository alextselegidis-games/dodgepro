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

import {levelScene} from '../core/LevelManager';
import Level from '../scenes/Level'; 

export default class extends Level {
    constructor() {
        super({key: 'Level1'});
        
        this.config = {
            level: 1,
            difficulty: 20,
            baseScore: 30
            // ...
        };
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
        this.createCursors(); 
        this.createRobot(); 
        this.createGameMenuBar(); 

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
        this.updateRobot(); 
        
    }
}