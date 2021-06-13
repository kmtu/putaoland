import {Scene} from 'phaser';

class GameScene extends Scene {
  constructor() {
    super('scene-game');
  }

  create() {
    // Add, scale, and make up a speed for our creature
    this.hearty = this.physics.add.sprite(10, 10, 'hearty');
    this.hearty.body.setAllowGravity(false);
    this.hearty.setScale(0.5);
    this.heartySpeed = 300;
    // Create a helper object for our arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Listen for keyboard input
    const {left, right, up, down} = this.cursors;
    if (left.isDown) {
      this.hearty.setVelocityX(-this.heartySpeed);
    }
    else if (right.isDown) {
      this.hearty.setVelocityX(this.heartySpeed);
    }
    else {
      this.hearty.setVelocityX(0);
    }
    if (up.isDown) {
      this.hearty.setVelocityY(-this.heartySpeed);
    }
    else if (down.isDown) {
      this.hearty.setVelocityY(this.heartySpeed);
    }
    else {
      this.hearty.setVelocityY(0);
    }
  }
}

export default GameScene;
