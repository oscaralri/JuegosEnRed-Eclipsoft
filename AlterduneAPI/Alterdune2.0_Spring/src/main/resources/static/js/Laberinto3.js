
export default class Laberinto3 extends Phaser.Scene {
    constructor(){
        super("Laberinto3");
    }

    static TILE_SIZE = 48


    preload() {
        this.load.image('tileset', 'assets/Tiles.png')
        this.load.tilemapTiledJSON('map3', 'assets/Laberinto3.tmj')
       
        this.load.spritesheet('Sprites', 'assets/Sprites1.png', { frameWidth: 42, frameHeight: 42 })
        
        this.load.crossOrigin = 'anonymous'; 
        
        
    }

    hasTrigger(tilemap, position) {
        return tilemap.layers.some((layer) => {
          const tile = tilemap.getTileAt(position.x, position.y, false, layer.name);
          return tile?.properties?.enter;
        });
    }

    create() {
        // CARGADO TILEMAP
        const map3 = this.make.tilemap({ key: 'map3', tileWidth: 48, tileHeight: 48});
        console.log("tilemap cargado")
        const tileset = map3.addTilesetImage('Tiles0', 'tileset');
        console.log("tileset cargao")
        const layer1 = map3.createLayer('top3', tileset, 0, 0)


        map3.setCollision(1)
        const player1Sprite = this.add.sprite(0, 0, 'Sprites').anims.play(playerColor1, true)
        const player2Sprite = this.add.sprite(0, 0, 'Sprites').anims.play(playerColor2, true)


        const gridEngineConfig = {
            characters: [
            {
                id: "player1",
                sprite: player1Sprite,
                startPosition: { x: 4, y: 3 },
            },
            {
                id: "player2",
                sprite: player2Sprite,
                startPosition: { x: 11, y: 3 },
            },
            ],
        };

    
        this.gridEngine.create(map3, gridEngineConfig);

        const positionChangeFinishedText = this.add.text(999, 899, "");

        this.gridEngine
        .positionChangeFinished()
        .subscribe(({enterTile }) => {
            positionChangeFinishedText.text =
            `enter: (${enterTile.x}, ${enterTile.y})`;
        
            if (this.hasTrigger(map3, enterTile)) {
                console.log("entrando en nueva zona")

                if (enterTile.x == 1){
                    playerScore1++;
                }else if (enterTile.x == 14){
                    playerScore2++;
                }
                this.scene.start("Fin")
            }
        });


        this.add.text(345, 0, playerScore1 + ' - ' + playerScore2, { fontFamily: 'Bangers', fontSize: '40px', color: '#000000', stroke: '#ffffff', strokeThickness: 4 });


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