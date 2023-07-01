
export default class Pruebas extends Phaser.Scene {
    constructor(){
        super("Pruebas");
    }

    static TILE_SIZE = 48


    preload() {
        this.load.image('tileset', 'assets/Tiles.png')
        this.load.tilemapTiledJSON('map', 'assets/map1.tmj')
        this.load.spritesheet('Sprites', 'assets/Sprites1.png', { frameWidth: 42, frameHeight: 42 })
        this.load.image('whiteTile', 'assets/whiteTile.png');

    }

    create() {
        // CARGADO TILEMAP
        const map = this.make.tilemap({ key: 'map', tileWidth: 48, tileHeight: 48});
        const tileset = map.addTilesetImage('Tiles', 'tileset');
        const layer1 = map.createLayer('top', tileset, 0, 0)
        

      //AnimacionES
      this.anims.create({
        key: 'rosa',
        frames: this.anims.generateFrameNumbers('Sprites', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
    });

    
    const playerSprite = this.add.sprite(0, 0, 'Sprites').anims.play('rosa', true)

    

    const gridEngineConfig = {
        characters: [
          {
            id: "player",
            sprite: playerSprite,
            startPosition: { x: 5, y: 5 },
          },
        ],
      };
    
      this.gridEngine.create(map, gridEngineConfig);


    }
    update(){
        const cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
            this.gridEngine.move("player", "left");
        } else if (cursors.right.isDown) {
            this.gridEngine.move("player", "right");
        } else if (cursors.up.isDown) {
            this.gridEngine.move("player", "up");
        } else if (cursors.down.isDown) {
            this.gridEngine.move("player", "down");
            }
    }
}