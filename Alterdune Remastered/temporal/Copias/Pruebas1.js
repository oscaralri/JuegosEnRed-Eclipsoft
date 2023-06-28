export default class Pruebas extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        this.load.spritesheet('Sprites', 'assets/Sprites.png', {frameWidth: 50, frameHeight: 50})
    }

    create(){
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
        
        

        var player = this.physics.add.sprite(400, 300, 'Sprites')
        player.anims.play('rosa', true)
        this.physics.add.sprite(450, 300, 'Sprites').anims.play('amarillo', true)
        this.physics.add.sprite(500, 300, 'Sprites').anims.play('azul', true)
        this.physics.add.sprite(350, 300, 'Sprites').anims.play('naranja', true)
        
        

    }

    update(){
    }
}