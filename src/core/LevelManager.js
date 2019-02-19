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

import Level1 from '../levels/Level1';
import Level2 from '../levels/Level2';

let level = 1;

export const LevelScenes = [
    Level1,
    Level2
];

export const levelScene = () => {
    return `Level${level}`;
};

export const increaseLevel = () => {
    level++;
};

export const decreaseLevel = () => {
    level++;
};

export const resetLevel = () => {
    level = 1;
};

export const gameCompleted = () => {
    return level > LevelScenes.length;
};

