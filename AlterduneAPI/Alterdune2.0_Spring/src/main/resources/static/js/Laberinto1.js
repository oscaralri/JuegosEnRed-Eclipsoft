
export default class Laberinto1 extends Phaser.Scene {
    constructor(){
        super("Laberinto1");
    }

    static TILE_SIZE = 48


    preload() {
        this.load.image('tileset', 'assets/Tiles.png')
        this.load.tilemapTiledJSON('map1', 'assets/Laberinto1.tmj')
       
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

        const music2 = this.sound.add('musica');
        music2.loop = true;
        music2.play();

        // CARGADO TILEMAP
        const map1 = this.make.tilemap({ key: 'map1', tileWidth: 48, tileHeight: 48});
        console.log("tilemap cargado")
        const tileset = map1.addTilesetImage('Tiles0', 'tileset');
        console.log("tileset cargao")
        const layer1 = map1.createLayer('top', tileset, 0, 0)

        map1.setCollision(1)
        const player1Sprite = this.add.sprite(0, 0, 'Sprites').anims.play(playerColor1, true)
        const player2Sprite = this.add.sprite(0, 0, 'Sprites').anims.play(playerColor2, true)


        const gridEngineConfig = {
            characters: [
            {
                id: "player1",
                sprite: player1Sprite,
                startPosition: { x: 1, y: 1 },
            },
            {
                id: "player2",
                sprite: player2Sprite,
                startPosition: { x: 14, y: 1 },
            },
            ],
        };

    
        this.gridEngine.create(map1, gridEngineConfig);

        const positionChangeFinishedText = this.add.text(999, 899, "");

        this.gridEngine
        .positionChangeFinished()
        .subscribe(({enterTile }) => {
            positionChangeFinishedText.text =
            `enter: (${enterTile.x}, ${enterTile.y})`;
        
            if (this.hasTrigger(map1, enterTile)) {
                console.log("entrando en nueva zona")

                if (enterTile.x == 1){
                    playerScore1++;
                }else if (enterTile.x == 14){
                    playerScore2++;
                }
                map1.destroy();
                this.scene.start("Laberinto2")
            }
        });


        this.add.text(345, 0, playerScore1 + ' - ' + playerScore2, { fontFamily: 'Bangers', fontSize: '40px', color: '#000000', stroke: '#ffffff', strokeThickness: 4 });
        //MUSICA
        const music = this.sound.add('musica');
        music.loop = true;
        music.play();
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