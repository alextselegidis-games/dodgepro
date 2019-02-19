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

import {levelScene, increaseLevel, gameCompleted} from '../core/LevelManager';
import Level from '../scenes/Level';
import {generateRedBarell, generateGreenBarell, generateBox} from '../core/ObjectGenerator';

export default class extends Level {
    constructor() {
        super({key: 'Level1'});

        this.config = {
            level: 1,
            length: 5000,
            generation: 300
        };

        this.lastGenerationStep = 0;
    }

    init() {
        this.progress = 0;
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
        this.createPlayer();
        this.createGameMenuBar();

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        this.objects = this.physics.add.group();

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.objects, this.objects);
        this.physics.add.collider(this.objects, this.platforms, this.onHitPlatform, null, this);
        this.physics.add.collider(this.player, this.objects, this.onHitObject, null, this);
    }

    update() {
        this.updatePlayer();
        this.updateObjects();
        this.updateProgress();

        if (this.progress > this.config.length) {
            this.scene.stop(levelScene());

            increaseLevel();

            if (gameCompleted()) {
                this.scene.launch('GameCompletedScene');
                return;
            }

            this.scene.start(levelScene());
        }
    }

    updateObjects() {
        var value = Math.random();

        if (value > 0.997 && (this.progress - this.lastGenerationStep) >= this.config.generation) {
            this.lastGenerationStep = this.progress;
            generateRedBarell(this.objects);
            return;
        }

        if (value > 0.995 && (this.progress - this.lastGenerationStep) >= this.config.generation) {
            this.lastGenerationStep = this.progress;
            generateGreenBarell(this.objects);
            return;
        }

        // if (value > 0.990 && (this.progress - this.lastGenerationStep) >= this.config.generation) {
        if (value > 0.700 && (this.progress - this.lastGenerationStep) >= this.config.generation) {
            this.lastGenerationStep = this.progress;
            generateRedBarell(this.objects);
            return;
        }

        // Phaser.Actions.RotateAroundDistance(this.objects.getChildren(), { x: 400, y: 300 }, 0.02, 200);

    }

    onHitObject(robot, object) {
        this.scene.stop(levelScene());
        this.scene.start('GameOverScene');
    }

    onHitPlatform(object, platform) {
        if (!object.hit) {
            object.hit = 0;
        }

        object.hit++;

        if (object.hit === object.hitPoints) {
            object.disableBody(true, true);
        }
    }
}