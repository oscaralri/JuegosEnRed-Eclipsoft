export default class MainScene extends Phaser.Scene {

    constructor() {
        super("MainScene");
    }

    preload() {
        console.log("preload");
        
        this.load.image('hitbox', 'assets/hitbox.png')
        this.load.image('camCruz', 'assets/caminoCruz1.png');
        this.load.image('camDer', 'assets/caminoDer1.png');
        this.load.image('camIzq', 'assets/caminoIzq1.png');
        this.load.image('camRec', 'assets/caminoRecto1.png');
        this.load.image('camNo', 'assets/noSalida1.png');
        this.load.image('camCruz', 'assets/caminoCruz1.png');
        this.load.image('camDer', 'assets/caminoDer1.png');
        this.load.image('camIzq', 'assets/caminoIzq1.png');
        this.load.image('camRec', 'assets/caminoRecto1.png');
        this.load.image('fondo', 'assets/fondo.png');
        this.load.spritesheet('Soul', 'assets/Soul.png', { frameWidth: 50, frameHeight: 50 });
        this.load.spritesheet('Soul2', 'assets/Soul2.png', { frameWidth: 50, frameHeight: 50 });
        this.load.spritesheet('spikes', 'assets/Spikessheet.png', { frameWidth: 80, frameHeight: 80 });
        this.load.audio('musica', ['assets/audio/musica.mp3']);
        this.load.image('sand', 'assets/sand.png');
        this.load.audio('hitSound', ['assets/audio/hitSound.mp3']);
    }


    create() {
        console.log("create");

        this.add.tileSprite(0, 0, 4000, 3000, 'sand');
        
        contador = 0;

        //this.add.tileSprite(0, 50, 375, 275, 'camRec');
        

        /*
        muro = this.physics.add.staticGroup();
        muro.create(200, 200, 'camRec');
        //this.physics.add.collider(player1, muro);
        */

        spikes = this.physics.add.sprite(400, 568, 'spikes');
        //spikes.physics.add.sprite(600, 600, 'spikes').setScale(0.8);
        music = this.sound.add('musica');
        music.loop = true;
        music.play();

        hitSound = this.sound.add('hitSound');
        
        cursors = this.input.keyboard.createCursorKeys();
        keys = this.input.keyboard.addKeys("W,A,S,D");
        //this.add.image(0, 0, 'fondo').setOrigin(0);
        player1 = this.physics.add.sprite(500, 450, 'Soul');
        player2 = this.physics.add.sprite(550, 450, 'Soul2');
        this.physics.world.setBounds(0, 0, 1600, 1200);
        player1.setCollideWorldBounds(true);
        player2.setCollideWorldBounds(true);

        

        hitbox = this.physics.add.staticGroup();
        hitbox.create(400, 568, 'hitbox').setScale(1);
        this.physics.add.collider(player1, hitbox, hit, null, this);



        this.physics.add.collider(player1, muro);

        

        //camaras
        this.cameras.main.setSize(800, 600);
        this.cameras.main.startFollow(player1, true);
        this.cameras.main.setZoom(1);
        this.cameras.main.setBounds(0, 0, 1600, 1200, true);


       

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


        this.anims.create({
            key: 'izq',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 30, end: 39 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'gira',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'arriba',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 10, end: 19 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'abajo',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'der',
            frames: this.anims.generateFrameNumbers('Soul2', { start: 20, end: 29 }),
            frameRate: 10,
            repeat: -1
        }); 
        
        this.anims.create({
            key: 'spikes',
            frames: this.anims.generateFrameNumbers('spikes', { start : 0, end: 20 }),
            frameRate: 60,
            repeat: -1
        });

/* 
        this.time.addEvent({
            delay: 3000,
            callback: () => {
                spikes.anims.play('spikes2', true);
                this.physics.add.collider(player1, spikes);
            },
            loop: true
        })

        this.time.addEvent({
            delay: 10,
            callback: ()=>{
                spikes.anims.play('spikes1', true);
                
            },
            loop: true
        })   */

         
        /*
        this.anims.create({
            key: 'spikes2',
            frames: this.anims.generateFrameNumbers('spikes', { start : 17, end: 20 }),
            frameRate: 10,
            repeat: -1
        });  */
        
    }


    update() {
        console.log("update");

        distance = Phaser.Math.Distance.Between(player1.x, player1.y, player2.x, player2.y);
        
        spikes.anims.play('spikes', true);

        if (distance <= 10000) {
            if (cursors.left.isDown) {
                player2.setVelocityX(-500);
                player2.anims.play('izq', true);
            }
            else if (cursors.right.isDown) {
                player2.setVelocityX(500);
                player2.anims.play('der', true);
            }
            else if (cursors.up.isDown) {
                player2.setVelocityY(-500);
                player2.anims.play('arriba', true);
            }
            else if (cursors.down.isDown) {
                player2.setVelocityY(500);
                player2.anims.play('abajo', true);
            }
            else {
                player2.setVelocityX(0);
                player2.setVelocityY(0);
            }

            if (keys.A.isDown) {
                player1.setVelocityX(-500);
                player1.anims.play('left', true);
            }
            else if (keys.D.isDown) {
                player1.setVelocityX(500);
                player1.anims.play('right', true);
            }
            else if (keys.W.isDown) {
                player1.setVelocityY(-500);
                player1.anims.play('up', true);
            }
            else if (keys.S.isDown) {
                player1.setVelocityY(500);
                player1.anims.play('down', true);
            }
            else {
                player1.setVelocityX(0);
                player1.setVelocityY(0);
            }
        }

        else {
            player1.setVelocityX(0);
            player1.setVelocityY(0);

            if (cursors.left.isDown) {
                player2.setVelocityX(-500);
                player2.anims.play('izq', true);
            }
            else if (cursors.right.isDown) {
                player2.setVelocityX(500);
                player2.anims.play('der', true);
            }
            else if (cursors.up.isDown) {
                player2.setVelocityY(-500);
                player2.anims.play('arriba', true);
            }
            else if (cursors.down.isDown) {
                player2.setVelocityY(500);
                player2.anims.play('abajo', true);
            }
            else {
                player2.setVelocityX(0);
                player2.setVelocityY(0);
            }
        }
    }
}