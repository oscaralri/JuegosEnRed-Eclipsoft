export default class seleccionScene extends Phaser.Scene {


    constructor() {
        super("seleccionPj");
    }

    preload() {
        this.load.image('menu', 'assets/menuFondo.png');

        //jugadores
        this.load.image('j1', 'assets/Menu/jugador1.png');
        this.load.image('j2', 'assets/Menu/jugador2.png');

        //boton jugar
        this.load.image('jugar', 'assets/Menu/play.png')

        //flechas
		this.load.image('cursor', 'assets/Menu/cursor.png');
        this.load.image('cursor2', 'assets/Menu/cursor2.png');

        
        this.load.spritesheet('Sprites', 'assets/Sprites1.png', { frameWidth: 42, frameHeight: 42 })
        

    }




    create() {

        
        //fondo
        this.add.image(200, 300, 'menu').setScale(0.75).setTint(0x5A4444 );

        //AnimacionES
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

        var list = ['amarillo', 'naranja', 'azul', 'rosa'];
        
        //Almas
        //Sprites almas
        const player1 = this.add.sprite(200, 300, 'Sprites').play('amarillo', true)
        .setScale(1.5)
        const player2 = this.add.sprite(600, 300, 'Sprites').play('amarillo', true)
        .setScale(1.5)

        //variables usadas para moverse por el array
        let i = 0;
        let e = 0;



        //BOTON JUgar
        const playButton = this.add.image(400, 540, 'jugar')
        .setScale(0.5)
        .setInteractive()
        .on('pointerdown', () => {this.scene.start('Inicio')})
        .on('pointerover', () =>{playButton.setTint(0xFFA3A3)} )
        .on('pointerout', () => {playButton.clearTint()} );

        //JUGADOR 1 UI
        this.add.image(200, 450, 'j1').setScale(0.4);

        //Flecha1 izquierda
        const IzqJ1 = this.add.image(40, 450,'cursor').setScale(0.5)
        .setInteractive()
        .on('pointerdown', () => { 
            if(i != 0){
            i = i - 1;
            var key = list[i];
            player1.play(key, true);
            playerColor1 = key;
            }
         })
        .on('pointerover', () =>{IzqJ1.setTint(0xFFA3A3)} )
        .on('pointerout', () => {IzqJ1.clearTint()} );


        //Flecha 1 derecha
        const DerJ1 = this.add.image(360, 450,'cursor2').setScale(0.5)
        .setInteractive()
        .on('pointerdown', () => { 
            if(i != 3){
                i = i + 1;
                var key = list[i]
                player1.play(key, true)
                playerColor1 = key;

            }
        })
        .on('pointerover', () =>{DerJ1.setTint(0xFFA3A3)} )
        .on('pointerout', () => {DerJ1.clearTint()} );


        //JUGADOR 2 UI

        this.add.image(600, 450, 'j2').setScale(0.4);

        //Flecha 2 izquierda
        const IzqJ2 = this.add.image(440, 450,'cursor').setScale(0.5)
        .setInteractive()
        .on('pointerdown', () => { 
            if(e != 0){
            e = e - 1;
            var key = list[e];
            player2.play(key, true);
            playerColor2 = key;
            }
         })
        .on('pointerover', () =>{IzqJ2.setTint(0xFFA3A3)} )
        .on('pointerout', () => {IzqJ2.clearTint()} );

        //Flecha 2 derecha
        const DerJ2 = this.add.image(760, 450,'cursor2').setScale(0.5)
        .setInteractive()
        .on('pointerdown', () => { 
            if(e != 4){
            e = e + 1;
            var key = list[e]
            player2.play(key, true)
            playerColor2 = key;
            }
         })
        .on('pointerover', () =>{DerJ2.setTint(0xFFA3A3)} )
        .on('pointerout', () => {DerJ2.clearTint()} );

		console.log("nanananana");
        
        
        
        //BOTON HACIA ATRAS
        const back = this.add.image(25, 50,'cursor').setScale(1)
        .setInteractive()
        .on('pointerdown', () => { this.scene.start('menuScene')})
        .on('pointerover', () =>{back.setTint(0xFFA3A3 )} )
        .on('pointerout', () => {back.clearTint()} );

		const userButton = this.add.image(700, 550, 'cursor').setScale(1)
		    .setInteractive()
		    .on('pointerdown', () => { window.location.href = '/nameForm'; })
		    .on('pointerover', () => { userButton.setTint(0xFFA3A3); })
		    .on('pointerout', () => { userButton.clearTint(); });
    }

    update(){
    }

}