import 'phaser';
import create from './create';
import update from './update';
import config from './config';
export default class GameScene extends Phaser.Scene {
  constructor () {
    super(config);
  }
  preload () {
    this.sound.play('level1Music', {loop: true});
  }

  create () {
    create(this);
  }

  update() {
    update(this);
  }
};