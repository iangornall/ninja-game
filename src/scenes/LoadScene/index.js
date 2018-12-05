import 'phaser';
import config from './config';
import loadAssets from './loadAssets';
import progressBar from './progressBar';

export default class LoadScene extends Phaser.Scene {
  constructor () {
    super(config);
  }

  preload () {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    let logo = this.add.image(centerX, centerY, 'logo');
    logo.y -= logo.height / 2;
    progressBar(this);
    loadAssets(this);
  }

  create () {
    this.scene.start('Game');
  }
};