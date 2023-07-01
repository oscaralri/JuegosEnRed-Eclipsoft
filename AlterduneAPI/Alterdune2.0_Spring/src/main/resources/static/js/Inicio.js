export default class Inicio extends Phaser.Scene {
    constructor(){
        super("Inicio");
    }



    preload() {
        this.load.image('tileset', 'assets/Tiles.png')
        this.load.tilemapTiledJSON('inicioMap', 'assets/Inicio/tilemapInicio.tmj')
        this.load.spritesheet('Sprites', 'assets/Sprites1.png', { frameWidth: 42, frameHeight: 42 })

    }

    

    hasTrigger(tilemap, position) {
        return tilemap.layers.some((layer) => {
          const tile = tilemap.getTileAt(position.x, position.y, false, layer.name);
          return tile?.properties?.enter;
        });
    }

    create() {

        
        // CARGADO TILEMAP
        const map = this.make.tilemap({ key: 'inicioMap', tileWidth: 48, tileHeight: 48});
        const tileset = map.addTilesetImage('Tiles0', 'tileset');
        const layer1 = map.createLayer('top', tileset, 0, 0)
        

    
        const player1Sprite = this.add.sprite(0, 0, 'Sprites').anims.play(playerColor1, true)
        const player2Sprite = this.add.sprite(0, 0, 'Sprites').anims.play(playerColor2, true)


        const gridEngineConfig = {
            characters: [
            {
                id: "player1",
                sprite: player1Sprite,
                startPosition: { x: 0, y: 7 },
            },
            {
                id: "player2",
                sprite: player2Sprite,
                startPosition: { x: 0, y: 6 },
            },
            ],
        };

    
        
        this.gridEngine.create(map, gridEngineConfig);


        this.cameras.main.startFollow(player1Sprite, true);
        this.cameras.main.setBounds(0,0, 960, 624, true)
        
        map.setCollision(1)

        const positionChangeFinishedText = this.add.text(-20, -50, "");

        

        this.gridEngine
        .positionChangeFinished()
        .subscribe(({enterTile }) => {
            positionChangeFinishedText.text =
            `enter: (${enterTile.x}, ${enterTile.y})`;
        
            if (this.hasTrigger(map, enterTile)) {
            this.scene.start("Laberinto1")
            }
        });

        
       

    }


    update(){
        const cursors0 = this.input.keyboard.createCursorKeys();
        if (cursors0.left.isDown) {
            this.gridEngine.move("player1", "left");
        } else if (cursors0.right.isDown) {
            this.gridEngine.move("player1", "right");
        } else if (cursors0.up.isDown) {
            this.gridEngine.move("player1", "up");
        } else if (cursors0.down.isDown) {
            this.gridEngine.move("player1", "down");
            }

            const keys = this.input.keyboard.addKeys({
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D,
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S
            });
            
            if (keys.left.isDown) {
                this.gridEngine.move("player2", "left");
            } else if (keys.right.isDown) {
                this.gridEngine.move("player2", "right");
            } else if (keys.up.isDown) {
                this.gridEngine.move("player2", "up");
            } else if (keys.down.isDown) {
                this.gridEngine.move("player2", "down");
            }
    }

    
}