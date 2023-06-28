import Pruebas from "./Pruebas.js";
import Inicio from "./Inicio.js";

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
    width: 800,
    height: 600,
    backgroundColor: '#333333',
    scene: [Inicio, Pruebas],
    pixelArt: true,
}

new Phaser.Game(config);
