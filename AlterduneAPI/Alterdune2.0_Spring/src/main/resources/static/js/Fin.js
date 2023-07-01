
export default class Fin extends Phaser.Scene {
    constructor(){
        super("Fin");
    }

    static TILE_SIZE = 48

    

    preload() {
        

        this.load.image('menu', 'assets/Menu/menuBackground-export.png');
        
    }

    create() {
        this.add.image(200, 300, 'menu').setScale(0.75);
        var ganador;
        if (playerScore1 > playerScore2){
            ganador = 'Jugador 1';
        }else if(playerScore2 < playerScore1){
            ganador = 'Jugador 2';
        }else{
            ganador = 'empate'
        }

        const style = {
            fontFamily: 'Arial',
            fontSize: '72px',
            color: '#ffffff'
          };

        if (ganador != 'empate'){
        
          
          const textoGanador = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, `¡${ganador} ha ganado!`, style);
          textoGanador.setOrigin(0.5);
        }else{
        const textoGanador = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, `EMPATE`, style);
        }

        this.input.on('pointerdown', this.irAlMenu, this);

    }
    update(){
    }
    
    irAlMenu() {
        // Lógica para cambiar a la escena del menú
        this.scene.start('menuScene'); // Reemplaza 'MenuScene' con el nombre de tu escena de menú
      }
}