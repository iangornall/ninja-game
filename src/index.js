import 'phaser';
import config from './config';
import GameScene from './scenes/GameScene';
import LoadScene from './scenes/LoadScene';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.add('Load', LoadScene);
    this.scene.start('Load');
  }
}

window.game = new Game();
