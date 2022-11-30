import MainScene from "./MainScene.js";
import gameOver from "./gameOver.js";
import salidaScene from "./salidaScene.js";
import menuScene from "./menuScene.js";
import seleccionScene from "./seleccionPj.js";
import desiertoScene from "./desiertoScene.js";


const config = {
    type: Phaser.AUTO,
    parent: 'alterdune',
    width: 800,
    height: 600,
    backgroundColor: '#333333',
    scene:[menuScene, seleccionScene, desiertoScene, MainScene, gameOver, salidaScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
}

new Phaser.Game(config);