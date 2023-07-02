import Laberinto1 from "./Laberinto1.js";
import Laberinto2 from "./Laberinto2.js";
import Laberinto3 from "./Laberinto3.js";
import Fin from "./Fin.js";
import Inicio from "./Inicio.js";
import menuScene from "./menuScene.js";
import seleccionPj from "./seleccionPj.js";


const config = {
    type: Phaser.AUTO,
    parent: 'alterdune',
    render: {
        antialias: false,
    },
    plugins: {
        scene: [
            {
                key: "GridEngine", // Unique key for the plugin in the "Pruebas" scene
                plugin: GridEngine,
                mapping: "gridEngine",
            },
        ],
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    width: 800,
    height: 600,
    backgroundColor: '#333333',
    scene: [menuScene, Laberinto1, Laberinto2, Laberinto3, Fin, Inicio,  seleccionPj],
    pixelArt: true,
}

const game=new Phaser.Game(config);

