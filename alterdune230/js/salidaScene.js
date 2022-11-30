

export default class salidaScene extends Phaser.Scene {

    constructor() {
        super("salidaScene");
    }

    preload() {
        this.load.image('continuara', 'assets/continuara.png');
        this.load.image('fondodes', 'assets/fondodes.png');
        this.load.image('volver', 'assets/volver.png');
    }

    create() {
        this.add.image(400, 300, 'fondodes').setScale(2).setTint(0x5A4444);
        this.add.image(400, 300, 'continuara');

        const volver = this.add.image(400, 450, 'volver').setScale(0.40)
        .setInteractive()
        .on('pointerdown', () => {
            this.scene.start('menuScene')
        })
        .on('pointerover', () =>{volver.setTint(0xFFA3A3 )} )
        .on('pointerout', () => {volver.clearTint()} );
    }

}