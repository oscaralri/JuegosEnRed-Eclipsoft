export default class seleccionScene extends Phaser.Scene {


    constructor() {
        super("seleccionPj");
    }

    preload() {
        this.load.image('menu', 'assets/menuBackground-export.png');

        //jugadores
        this.load.image('j1', 'assets/Menu/jugador1.png');
        this.load.image('j2', 'assets/Menu/jugador2.png');

        //boton jugar
        this.load.image('jugar', 'assets/Menu/play.png')

        //flechas
		this.load.image('cursor', 'assets/Menu/cursor.png');
        this.load.image('cursor2', 'assets/Menu/cursor2.png');
        
        //spritesheet almas
        this.load.spritesheet('SoulW', 'assets/Menu/SoulW.png', { frameWidth: 150, frameHeight: 150 });
        

    }




    create() {


        //Animación almas
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('SoulW', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        //COLORES ALMAS en un array para guardarlo en variables globales
        let colores = ["0xFF8181", "0x64FD52 ", "0x76D7C4", "0xF888FF", "0xF4D03F"];

        //variables usadas para moverse por el array
        let i = -1;
        let e = -1;

        //fondo
        this.add.image(200, 300, 'menu').setScale(0.75).setTint(0x5A4444 );


        //BOTON JUgar
        const playButton = this.add.image(400, 540, 'jugar')
        .setScale(0.5)
        .setInteractive()
        .on('pointerdown', () => {this.scene.start('desiertoScene')})
        .on('pointerover', () =>{playButton.setTint(0xFFA3A3)} )
        .on('pointerout', () => {playButton.clearTint()} );

        //JUGADOR 1 UI
        this.add.image(200, 450, 'j1').setScale(0.4);

        //Flecha1 izquierda
        const IzqJ1 = this.add.image(40, 450,'cursor').setScale(0.5)
        .setInteractive()
        .on('pointerdown', () => { 
            if(i != -2){
            i = i - 1;
            player1.setTint(colores[i]);
            color1 = colores[i];
            }
         })
        .on('pointerover', () =>{IzqJ1.setTint(0xFFA3A3)} )
        .on('pointerout', () => {IzqJ1.clearTint()} );


        //Flecha 1 derecha
        const DerJ1 = this.add.image(360, 450,'cursor2').setScale(0.5)
        .setInteractive()
        .on('pointerdown', () => { 
            if(i != 4){
                i = i + 1;
                player1.setTint(colores[i]);
                color1 = colores[i];
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
            if(e != -2){
            e = e - 1;
            player2.setTint(colores[e]);
            color2 = colores[e];
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
            player2.setTint(colores[e]);
            color2 = colores[e];
            }
         })
        .on('pointerover', () =>{DerJ2.setTint(0xFFA3A3)} )
        .on('pointerout', () => {DerJ2.clearTint()} );


        //Almas
        //Sprites almas
        player1 = this.physics.add.sprite(200, 300, 'SoulW')
        .setScale(1.5)
        player2 = this.physics.add.sprite(600, 300, 'SoulW')
        .setScale(1.5)
        
        
        //BOTON HACIA ATRAS
        const back = this.add.image(25, 50,'cursor').setScale(1)
        .setInteractive()
        .on('pointerdown', () => { this.scene.start('menuScene')})
        .on('pointerover', () =>{back.setTint(0xFFA3A3 )} )
        .on('pointerout', () => {back.clearTint()} );


        

    }

    update(){
        
        player1.anims.play('down', true);
        player2.anims.play('down', true);
    }
    

}