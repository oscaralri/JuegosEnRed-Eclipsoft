export default class MainScene extends Phaser.Scene {

    constructor() {
        super("MainScene");
    }

    preload() {
        console.log("preload");

        this.load.image('hitbox', 'assets/hitbox.png')
        this.load.image('walli', 'assets/walli.png');
        this.load.image('walli1200', 'assets/walli1200.png');
        this.load.image('walli1200R', 'assets/walli1200R.png');
        this.load.image('walliR', 'assets/walliR.png');


        this.load.spritesheet('Soul', 'assets/movement.png', { frameWidth: 50, frameHeight: 50 });
        this.load.spritesheet('spikes', 'assets/Spikessheet.png', { frameWidth: 80, frameHeight: 80 });


        this.load.audio('musica', ['assets/audio/musica.mp3']);
        this.load.audio('hitSound', ['assets/audio/hitSound.mp3']);

        this.load.image('arena', 'assets/Desierto.png');
        this.load.image('carpet', 'assets/carpet.png');
    }


    create() {
        console.log("create");

        this.add.tileSprite(0, 0, 4000, 3000, 'arena');
        contador = 0;

        carpet = this.physics.add.sprite(1525, 25, 'carpet').setScale(0.45);
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




        spikes1 = this.physics.add.sprite(1075, 825, 'spikes').setScale(0.5);
        spikes2 = this.physics.add.sprite(1475, 475, 'spikes').setScale(0.5);
        spikes3 = this.physics.add.sprite(675, 925, 'spikes').setScale(0.5);
        spikes4 = this.physics.add.sprite(825, 325, 'spikes').setScale(0.5);
        spikes5 = this.physics.add.sprite(825, 425, 'spikes').setScale(0.5);
        spikes6 = this.physics.add.sprite(875, 325, 'spikes').setScale(0.5);
        spikes7 = this.physics.add.sprite(875, 425, 'spikes').setScale(0.5);

        hitSound = this.sound.add('hitSound');

        cursors = this.input.keyboard.createCursorKeys();
        keys = this.input.keyboard.addKeys("W,A,S,D");
        player1 = this.physics.add.sprite(125, 1300, 'Soul').setTint(color1);
        player2 = this.physics.add.sprite(275, 1300,  'Soul').setTint(color2);
        this.physics.world.setBounds(0, 0, 1600, 1200);
        player1.setCollideWorldBounds(true);
        player2.setCollideWorldBounds(true);



        hitbox = this.physics.add.staticGroup();
        hitbox.create(1075, 825, 'hitbox');
        hitbox.create(675, 925, 'hitbox');
        hitbox.create(825, 325, 'hitbox');
        hitbox.create(825, 425, 'hitbox');
        hitbox.create(875, 325, 'hitbox');
        hitbox.create(875, 425, 'hitbox');
        hitbox.create(1475, 475, 'hitbox');


        hitboxSal = this.physics.add.staticGroup();
        hitboxSal.create(1525, 25, 'hitbox');

        this.physics.add.collider(player1, hitbox, hit, null, this);
        this.physics.add.collider(player2, hitbox, hit, null, this);

        this.physics.add.collider(player1, hitboxSal, salida, null, this);
        this.physics.add.collider(player2, hitboxSal, salida, null, this);


        this.physics.add.collider(player1, walls);
        this.physics.add.collider(player2, walls);




        //camaras
        this.cameras.main.setSize(800, 600);
        this.cameras.main.startFollow(player1, true);
        this.cameras.main.setZoom(1.5);
        this.cameras.main.setBounds(0, 0, 1600, 1200, true);

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

        this.anims.create({
            key: 'spikes',
            frames: this.anims.generateFrameNumbers('spikes', { start: 0, end: 20 }),
            frameRate: 30,
            repeat: -1
        });

    }


    update() {
        console.log("update");

        distance = Phaser.Math.Distance.Between(player1.x, player1.y, player2.x, player2.y);

        spikes1.anims.play('spikes', true);
        spikes2.anims.play('spikes', true);
        spikes3.anims.play('spikes', true);
        spikes4.anims.play('spikes', true);
        spikes5.anims.play('spikes', true);
        spikes6.anims.play('spikes', true);
        spikes7.anims.play('spikes', true);

        if (distance <= 275) {
            if (cursors.left.isDown) {
                player2.setVelocityX(-160);
                player2.anims.play('izq', true);
            }
            else if (cursors.right.isDown) {
                player2.setVelocityX(160);
                player2.anims.play('der', true);
            }
            else if (cursors.up.isDown) {
                player2.setVelocityY(-160);
                player2.anims.play('arriba', true);
            }
            else if (cursors.down.isDown) {
                player2.setVelocityY(160);
                player2.anims.play('abajo', true);
            }
            else {
                player2.setVelocityX(0);
                player2.setVelocityY(0);
            }

            if (keys.A.isDown) {
                player1.setVelocityX(-160);
                player1.anims.play('izq', true);
            }
            else if (keys.D.isDown) {
                player1.setVelocityX(160);
                player1.anims.play('der', true);
            }
            else if (keys.W.isDown) {
                player1.setVelocityY(-160);
                player1.anims.play('arriba', true);
            }
            else if (keys.S.isDown) {
                player1.setVelocityY(160);
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
                player2.setVelocityX(-160);
                player2.anims.play('izq', true);
            }
            else if (cursors.right.isDown) {
                player2.setVelocityX(160);
                player2.anims.play('der', true);
            }
            else if (cursors.up.isDown) {
                player2.setVelocityY(-160);
                player2.anims.play('arriba', true);
            }
            else if (cursors.down.isDown) {
                player2.setVelocityY(160);
                player2.anims.play('abajo', true);
            }
            else {
                player2.setVelocityX(0);
                player2.setVelocityY(0);
            }
        }
    }
}