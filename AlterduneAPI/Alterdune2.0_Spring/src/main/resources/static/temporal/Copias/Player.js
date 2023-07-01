import Pruebas  from "./Pruebas.js";

export class Player{
  constructor(sprite, tilePos) {
    this.sprite = sprite;
    this.tilePos = tilePos;

    if (this.sprite instanceof Phaser.GameObjects.Sprite) {
      console.log(this.sprite.getBottomCenter());
    } else {
      console.log("this.sprite no es una instancia de Phaser.GameObjects.Sprite");
    }


    console.log(this.sprite);
    console.log(tilePos);

    console.log(this.sprite.getBottomCenter());

;    const offsetX = Pruebas.TILE_SIZE / 2;
    const offsetY = Pruebas.TILE_SIZE;
    console.log(sprite)
    console.log(tilePos)

    this.sprite.setPosition(
      tilePos.x * Pruebas.TILE_SIZE + offsetX,
      tilePos.y * Pruebas.TILE_SIZE + offsetY
    );
    this.sprite.setFrame(55);
  }

  getPosition() {
    var sprite1 = this.sprite.getBottomCenter();
    return sprite1;
  }
  
  setPosition(position) {
    this.sprite.setPosition(position.x, position.y);
  }
  
}