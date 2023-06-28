import { Player } from "./Player.js"
import { GridControls } from "./GridControls.js";
import { GridPhysics } from "./GridPhysics.js";

export default class Pruebas extends Phaser.Scene {
    constructor() {
        super("MainScene");
        this.gridControls = GridControls
        this.gridPhysics = GridPhysics
    }

    static TILE_SIZE = 48


    preload() {
        this.load.image('tileset', 'assets/Tiles.png')
        this.load.tilemapTiledJSON('map', 'assets/map1.tmj')
        this.load.spritesheet('Sprites', 'assets/Sprites1.png', { frameWidth: 42, frameHeight: 42 })
        

    }

    create() {
        // CARGADO TILEMAP
        const map = this.make.tilemap({ key: 'map', tileWidth: 48, tileHeight: 48});
        const tileset = map.addTilesetImage('Tiles', 'tileset');
        const layer1 = map.createStaticLayer('top', tileset, 0, 0)

        //AnimacionES
        this.anims.create({
          key: 'rosa',
          frames: this.anims.generateFrameNumbers('Sprites', { start: 0, end: 4 }),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
          key: 'naranja',
          frames: this.anims.generateFrameNumbers('Sprites', { start: 5, end: 9 }),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
          key: 'azul',
          frames: this.anims.generateFrameNumbers('Sprites', { start: 10, end: 14 }),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
          key: 'amarillo',
          frames: this.anims.generateFrameNumbers('Sprites', { start: 15, end: 19 }),
          frameRate: 10,
          repeat: -1
      });

      const playerSprite = this.add.sprite(0, 0, 'Sprites')

      
      this.cameras.main.roundPixels = true;
      const player = new Player(playerSprite, new Phaser.Math.Vector2(6,6))


      this.add.sprite(450, 300, 'Sprites').anims.play('amarillo', true)
      this.add.sprite(500, 300, 'Sprites').anims.play('azul', true)
      this.add.sprite(350, 300, 'Sprites').anims.play('naranja', true)

      //CONTROLES

      this.gridPhysics = new GridPhysics(player);
      this.gridControls = new GridControls(
      this.input,
      this.gridPhysics
      );
      
      }

    update(time, delta){
      this.gridControls.update();
      this.gridPhysics.update(delta);
    }
}