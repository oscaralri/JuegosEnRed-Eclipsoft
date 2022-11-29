export default class MainScene extends Phaser.Scene {
    
    constructor() {
        super("MainScene");
    }

    preload() {
        console.log("preload");

       

        this.load.image('map', 'assets/map.png');
        this.load.image('Desierto', 'assets/Desierto.png');
        this.load.image('camCruz', 'assets/caminoCruz1.png');
        this.load.image('camDer', 'assets/caminoDer1.png');
        this.load.image('camIzq', 'assets/caminoIzq1.png');
        this.load.image('camRec', 'assets/caminoRecto1.png');
        this.load.image('camNo', 'assets/noSalida1.png');
        this.load.image('camCruz', 'assets/caminoCruz1.png');
        this.load.image('camDer', 'assets/caminoDer1.png');
        this.load.image('camIzq', 'assets/caminoIzq1.png');
        this.load.image('camRec', 'assets/caminoRecto1.png');
        this.load.image('fondo2', 'assets/fondo.png');
        this.load.image('sand', 'assets/sand.png');
        //Muros
        this.load.image('walli', 'assets/walli.png');
        this.load.image('walli1200', 'assets/walli1200.png');
        this.load.image('walli1200R', 'assets/walli1200R.png');
        this.load.image('walliR', 'assets/walliR.png');



        this.load.spritesheet('Soul', 'assets/Soul.png', { frameWidth: 50, frameHeight: 50 });
        this.load.spritesheet('Soul2',
            'assets/Soul2.png',
            { frameWidth: 50, frameHeight: 50 }
        );
        this.load.audio('musica', ['assets/audio/musica.mp3']);

        //this.load.map
        //GUSTAVO ATTEMPT
        // this.load.image('tiles', 'assets/map.jfif');
        //this.load.tilemapTiledJSON('map1', 'map1.tmj');
        //this.load.tilemap("Mapa", "tilemap.json", null, Phaser.Tilemap.TILED_JSON);
    }

    

    create() {
        console.log("create");
        //FOG ATTEMPT
       /*const floorLayer = map.createStaticLayer('Mapa', tileset);

        const width = this.scale.width;
        const height = this.scale.height;*/


        music = this.sound.add('musica');
        cursors = this.input.keyboard.createCursorKeys();
        keys = this.input.keyboard.addKeys("W,A,S,D");

       //this.add.image(800, 600, 'fondo').setScale(2);
        this.add.tileSprite(0, 0, 4000, 3000, 'Desierto');
       //this.add.image(0, 0, 'map').setScale(2).setOrigin(0);
       //var wall=this.add.tileSprite(600, 400, 100, 50, 'sand');

        //GUSTAVO ATTEMPT
       const map = this.make.tilemap({ key: 'map1',tileWidth: 50, tileHeight: 50 });

       /* const tileset = map.addTilesetImage('sand', 'sand');
        const layer = map.createLayer("toplayer", tileset, 0, 0);
        const backgroundLayer = map.createStaticLayer('Capa de patrones 1', tileset, 0, 0);
        const interactiveLayer = map.createStaticLayer('muros', tileset, 0, 0);*/

        player1 = this.physics.add.sprite(100, 450, 'Soul');
        player2 = this.physics.add.sprite(150, 450, 'Soul2');
        //player2.setTint(0xBC16FF);
       
        this.physics.world.setBounds(0, 0, 1600, 1200);
        player1.setCollideWorldBounds(true);
        player2.setCollideWorldBounds(true);
        //camaras
        this.cameras.main.setSize(800, 600);
        this.cameras.main.startFollow(player1, true);
        this.cameras.main.setZoom(2);
        this.cameras.main.setBounds(0, 0, 1600, 1200, true);

        ////////////////////TODOS LOS MUROS://////////////////////

        walls = this.physics.add.staticGroup();
        //fronteras
        walls.create(650, 25, 'walli1200');
        walls.create(950, 1175, 'walli1200');
        walls.create(25, 600, 'walli1200R');
        walls.create(1575, 600, 'walli1200R');
        //verticales
        walls.create(275, 825, 'walliR');
        walls.create(575, 825, 'walliR');
        walls.create(975, 775, 'walliR');
        walls.create(775, 1025, 'walliR');
        walls.create(775, 625, 'walliR');
        walls.create(575, 475, 'walliR');
        walls.create(225, 325, 'walliR');
        walls.create(425, 175, 'walliR');
        walls.create(825, 175, 'walliR');

        walls.create(1175, 375, 'walliR');
        walls.create(1325, 625, 'walliR');
        walls.create(1375, 175, 'walliR');
        //horizontales
        walls.create(175, 575, 'walli');
        walls.create(325, 425, 'walli');
        walls.create(425, 575, 'walli');
        walls.create(325, 725, 'walli');
        walls.create(175, 925, 'walli');
        walls.create(425, 925, 'walli');
        walls.create(925, 925, 'walli');
        walls.create(825, 475, 'walli');
        walls.create(825, 275, 'walli');
        walls.create(1075, 275, 'walli');
        walls.create(1025, 475, 'walli');
        walls.create(1275, 475, 'walli');
        walls.create(1425, 975, 'walli');
        walls.create(1375, 25, 'walli');

        







        //Colisiones
        //wall.setCollisionBetween(54, 83);
        this.physics.add.collider(player1, walls);
        this.physics.add.collider(player2, walls);


        //music.play();
        //repeat: -1;
        

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Soul', { start: 30, end: 39 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('Soul', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('Soul', { start: 10, end: 19 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('Soul', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Soul', { start: 20, end: 29 }),
            frameRate: 10,
            repeat: -1
        });
        //ANIMACIÓN 2
        this.anims.create({
            key: 'left2',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 30, end: 39 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn2',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up2',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 10, end: 19 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down2',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right2',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 20, end: 29 }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.launch("MainScene2"); 

    }

    update(){
        console.log("update");

        if (cursors.left.isDown) {
            player2.setVelocityX(-160);
            player2.anims.play('left2', true);
        }
        else if (cursors.right.isDown) {
            player2.setVelocityX(160);
            player2.anims.play('right2', true);
        }
        else if (cursors.up.isDown) {
            player2.setVelocityY(-160);
            player2.anims.play('up2', true);
        }
        else if (cursors.down.isDown) {
            player2.setVelocityY(160);
            player2.anims.play('down2', true);
        }
        else {
            player2.setVelocityX(0);
            player2.setVelocityY(0);
            player2.anims.play('turn2', true);
        }

        if (keys.A.isDown) {
            player1.setVelocityX(-160);
            player1.anims.play('left', true);
        }
        else if (keys.D.isDown) {
            player1.setVelocityX(160);
            player1.anims.play('right', true);
        }
        else if (keys.W.isDown) {
            player1.setVelocityY(-160);
            player1.anims.play('up', true);
        }
        else if (keys.S.isDown) {
            player1.setVelocityY(160);
            player1.anims.play('down', true);
        }
        else {
            player1.setVelocityX(0);
            player1.setVelocityY(0);
            player1.anims.play('turn', true);

        }
    }
}