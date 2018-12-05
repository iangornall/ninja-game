import preload from './preload';
import create from './create';
import update from './update';
let config = {
  type: Phaser.AUTO,
  width: 1366,
  height: 768,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 3000 },
        debug: false,
        overlapBias: 16,
        tileBias: 64
    }
  }
};
export default config;