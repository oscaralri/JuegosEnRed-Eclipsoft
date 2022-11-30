export default class desiertoScene extends Phaser.Scene {

    constructor() {
        super("desiertoScene");
    }

    preload() {

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
        this.load.spritesheet('Soul', 'assets/movement.png', { frameWidth: 50, frameHeight: 50 });
        this.load.audio('musica', ['assets/audio/musica.mp3']);
        this.load.image('desierto', 'assets/InicioAse.png');
        this.load.image('hitbox', 'assets/hitbox.png');
    }


    create() {

        music = this.sound.add('musica');
        cursors = this.input.keyboard.createCursorKeys();
        keys = this.input.keyboard.addKeys("W,A,S,D");
        this.add.image(0, 600, 'desierto').setOrigin(0).setScale(1);
        player1 = this.physics.add.sprite(0, 600, 'Soul').setTint(color1);
        player2 = this.physics.add.sprite(50, 600, 'Soul').setTint(color2);
        this.physics.world.setBounds(0, 1200, 1600, 200);
        player1.setCollideWorldBounds(true);
        player2.setCollideWorldBounds(true);
    
        //map.setCollisionBetween(1, 1000, true, 'muros');

        //camaras
        this.cameras.main.setSize(800, 600);
        this.cameras.main.startFollow(player1, true);
        //this.cameras.main.setZoom(1);
        this.cameras.main.setBounds(0, 800, 1600, 600, true);


        hitbox = this.physics.add.staticGroup();
        hitbox.create(1300, 1200, 'hitbox').setScale(1);
        this.physics.add.collider(player1, hitbox, cambioScene, null, this);


        music.loop = true;
        music.play();


        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Soul', { start: 30, end: 39 }),
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
            frames: this.anims.generateFrameNumbers('Soul', { start: 30, end: 39 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'gira',
            frames: this.anims.generateFrameNumbers('Soul', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'arriba',
            frames: this.anims.generateFrameNumbers('Soul', { start: 10, end: 19 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'abajo',
            frames: this.anims.generateFrameNumbers('Soul', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'der',
            frames: this.anims.generateFrameNumbers('Soul', { start: 20, end: 29 }),
            frameRate: 10,
            repeat: -1
        });
    }

    update() {
        console.log("update");

        distance = Phaser.Math.Distance.Between(player1.x, player1.y, player2.x, player2.y);
        if (distance <= 350) {
            if (cursors.left.isDown) {
                player2.setVelocityX(-250);
                player2.anims.play('izq', true);
            }
            else if (cursors.right.isDown) {
                player2.setVelocityX(250);
                player2.anims.play('der', true);
            }
            else if (cursors.up.isDown) {
                player2.setVelocityY(-250);
                player2.anims.play('arriba', true);
            }
            else if (cursors.down.isDown) {
                player2.setVelocityY(250);
                player2.anims.play('abajo', true);
            }
            else {
                player2.setVelocityX(0);
                player2.setVelocityY(0);
            }

            if (keys.A.isDown) {
                player1.setVelocityX(-250);
                player1.anims.play('izq', true);
            }
            else if (keys.D.isDown) {
                player1.setVelocityX(250);
                player1.anims.play('der', true);
            }
            else if (keys.W.isDown) {
                player1.setVelocityY(-250);
                player1.anims.play('arriba', true);
            }
            else if (keys.S.isDown) {
                player1.setVelocityY(250);
                player1.anims.play('abajo', true);
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
                player2.setVelocityX(-250);
                player2.anims.play('izq', true);
            }
            else if (cursors.right.isDown) {
                player2.setVelocityX(250);
                player2.anims.play('der', true);
            }
            else if (cursors.up.isDown) {
                player2.setVelocityY(-250);
                player2.anims.play('arriba', true);
            }
            else if (cursors.down.isDown) {
                player2.setVelocityY(250);
                player2.anims.play('abajo', true);
            }
            else {
                player2.setVelocityX(0);
                player2.setVelocityY(0);
            }
        }

    }
}