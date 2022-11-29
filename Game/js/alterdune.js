import MainScene from "./MainScene.js";

const config = {
    type: Phaser.AUTO,
    parent: 'alterdune',
    width: 800,
    height: 600,
    backgroundColor: '#333333',
    scene:[MainScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
}

new Phaser.Game(config);