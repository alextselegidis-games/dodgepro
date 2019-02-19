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

export const generateRedBarell = (parentGroup) => {
    var object = parentGroup.create(Phaser.Math.Between(0, 800), -100, 'barrel-red');
    object.setScale(0.5);
    object.setBounce(0.5);
    object.setCollideWorldBounds(true);
    object.setVelocity(Phaser.Math.Between(-200, 200), 0);
    object.allowGravity = false;
    object.hitPoints = 3;
    object.angle = Phaser.Math.Between(-180, 180);
    object.angularVelocity = 2;
    object.setOrigin(0.5, 0.5);
    // debugger;
};

export const generateGreenBarell = (parentGroup) => {
    var object = parentGroup.create(Phaser.Math.Between(0, 800), -100, 'barrel-green');
    object.setScale(0.7);
    object.setBounce(0.7);
    object.setCollideWorldBounds(true);
    object.setVelocity(Phaser.Math.Between(-200, 200), 0);
    object.allowGravity = false;
    object.hitPoints = 4;
};

export const generateBox = (parentGroup) => {
    var object = parentGroup.create(Phaser.Math.Between(0, 800), -100, 'box');
    object.setScale(0.8);
    object.setBounce(0.8);
    object.setCollideWorldBounds(true);
    object.setVelocity(Phaser.Math.Between(-200, 200), 0);
    object.allowGravity = false;
    object.hitPoints = 7;
};