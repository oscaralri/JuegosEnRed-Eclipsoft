export default class gameOver extends Phaser.Scene {

    constructor() {
        super("gameOver");
    }

    preload() {
        this.load.image('gameOver', 'assets/gameOver.png');
        this.load.image('jugarden', 'assets/jugarden.png');
        this.load.image('volver', 'assets/volver.png');
        this.load.image('fondodes', 'assets/fondodes.png');
    }

    create(){
        this.add.image(400, 300, 'fondodes').setScale(2).setTint(0x5A4444);
        this.add.image(400, 200, 'gameOver');
        const playButton = this.add.image(400, 350, 'jugarden').setScale(0.40)
        .setInteractive()
        .on('pointerdown', () => {
            this.scene.start('MainScene')
        })
        .on('pointerover', () =>{playButton.setTint(0xFFA3A3)} )
        .on('pointerout', () => {playButton.clearTint()} );


        const volver = this.add.image(400, 400, 'volver').setScale(0.40)
        .setInteractive()
        .on('pointerdown', () => {
            this.scene.start('menuScene')
        })
        .on('pointerover', () =>{volver.setTint(0xFFA3A3 )} )
        .on('pointerout', () => {volver.clearTint()} );

    }

}