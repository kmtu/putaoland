import {Scene} from 'phaser';

class BootScene extends Scene {
  constructor() {
    super('scene-boot');
  }

  preload() {
    // Load any assets here from your assets directory
    this.load.image('hearty', './assets/hearty.png');
  }

  create() {
    this.scene.start('scene-game');
  }
}

export default BootScene;
