export default class menuScene extends Phaser.Scene {


    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('menu', 'assets/Menu/menuBackground-export.png');
        this.load.image('titulo', 'assets/Menu/titulo.png');
        this.load.audio('musica', ['assets/audio/musica.mp3']);
        this.load.audio('buttonSound', ['assets/audio/buttonSound.mp3'])

        //preload imagenes botones
        this.load.image('playButt', 'assets/Menu/play.png');
        this.load.image('creditosButt', 'assets/Menu/botonCreditos.png');
        this.load.image('info', 'assets/Menu/info.png');
        

        //Controles
        this.load.image('controles', 'assets/Menu/controles.png');

        //creditos
        this.load.spritesheet('credits', 'assets/Menu/Creditos.png', { frameWidth: 500, frameHeight: 500 });
		this.load.image('lapida', 'assets/Menu/creditsBack.png');
		this.load.image('cursor', 'assets/Menu/cursor.png');
    }




    create() {

        //Titulo y fondo
        this.add.image(200, 300, 'menu').setScale(0.75);
        this.add.image(375, 100, 'titulo').setScale(1);
        
        
        buttonSound = this.sound.add('buttonSound');
    
        
        //BOTONES
        
	    // Play 
        const playButton = this.add.image(400, 300, 'playButt').setScale(0.40)
        .setInteractive()
        .on('pointerdown', () => {
            music.stop();
            buttonSound.play();
            this.scene.start('seleccionPj')
        })
        .on('pointerover', () =>{playButton.setTint(0xFFA3A3 )} )
        .on('pointerout', () => {playButton.clearTint()} );
        

        //Creditos
        
        //animacion (fuera)
        const creditsButton = this.add.image(400, 400, 'creditosButt').setScale(0.40)
        .setInteractive()
        .on('pointerdown', () => {   
            buttonSound.play();
            var lapi2 = this.add.image(400, 360, 'lapida').setScale(1.5);
            animacion1.setPosition(400, 350).setDepth(1);
            var back0 = this.add.image(50, 550,'cursor')
            .setInteractive()
            .on('pointerdown', () => { 
                //Se destruye la imagen de controles
                animacion1.setPosition(1000, 1000)
                lapi2.destroy();
                lapi2 = null;
                back0.destroy();
                back0 = null;
                buttonSound.play();
            })
            .on('pointerover', () =>{back0.setTint(0xFFA3A3 )} )
            .on('pointerout', () => {back0.clearTint()} );
        })
        .on('pointerover', () =>{creditsButton.setTint(0xFFA3A3 )} )
        .on('pointerout', () => {creditsButton.clearTint()} );
        
        animacion1 = this.physics.add.sprite(1000, 1000, 'credits').setScale(0.80);

        

        //Animación creditos
        this.anims.create({
            key: 'creditos',
            frames: this.anims.generateFrameNumbers('credits', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        }); 

        //info botón
        const infoButton = this.add.image(750, 550, 'info').setScale(1)
        .setInteractive()
        .on('pointerdown', () => {
            buttonSound.play();
            var controlesI = this.add.image(400,300, 'controles').setScale(2)
            var back1 = this.add.image(50, 550,'cursor').setScale(1)
            .setInteractive()
            .on('pointerdown', () => { 
                //Se destruye la imagen de controles
                controlesI.destroy();
                controlesI = null
                back1.destroy();
                back1 = null;
            })
            .on('pointerover', () =>{back1.setTint(0xFFA3A3 )} )
            .on('pointerout', () => {back1.clearTint()} );
    })
        .on('pointerover', () =>{infoButton.setTint(0xFFA3A3 )} )
        .on('pointerout', () => {infoButton.clearTint()} );
        


        //MUSICA
        music = this.sound.add('musica');
        music.loop = true;
        music.play();

    }

    update(){
        animacion1.anims.play('creditos', true);
    }
    

}
