import 'phaser';
import preload from './preload';
import create from './create';
import update from './update';
import config from './config';
export default class GameScene extends Phaser.Scene {
  constructor () {
    super(config);
  }

  preload () {
    preload(this);
  }

  create () {
    create(this);
  }

  update() {
    update(this);
  }
};