export default class gameOver extends Phaser.Scene {

    constructor() {
        super("gameOver");
    }

    preload() {
        this.load.image('gameOver', 'assets/gameOver.png');
    }

    create(){
        this.add.image(400, 300, 'gameOver');
    }

    update(){}
}