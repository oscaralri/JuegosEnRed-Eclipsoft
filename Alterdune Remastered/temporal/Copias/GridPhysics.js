import { Direction } from "./Direction.js";
import { Player } from "./Player.js";
import Pruebas from "./Pruebas.js";
const Vector2 = Phaser.Math.Vector2

export class GridPhysics {
    

    constructor(player) {
        this.movementDirection = Direction.NONE;
        this.speedPixelsPerSecond = Pruebas.TILE_SIZE * 4;
        this.player = player;
        this.movementDirectionVectors = {
            [Direction.UP]: new Vector2(0, -1),
            [Direction.DOWN]: new Vector2(0, 1),
            [Direction.LEFT]: new Vector2(-1, 0),
            [Direction.RIGHT]: new Vector2(1, 0),
          };
      }

  movePlayer(direction) {
    if (!this.isMoving()) {
      this.startMoving(direction);
    }
  }

  isMoving() {
    return this.movementDirection != Direction.NONE;
  }

  startMoving(direction) {
    this.movementDirection = direction;
  }

  update(delta) {
    if (this.isMoving()) {
        this.updatePlayerPosition(delta);
    } 
  }

  updatePlayerPosition(delta) {
    const pixelsToWalkThisUpdate = this.getPixelsToWalkThisUpdate(delta);

    
    const directionVec = this.movementDirectionVectors[this.movementDirection].clone();

    const movementDistance = directionVec.multiply(new Vector2(pixelsToWalkThisUpdate));

    const newPlayerPos = this.player.getPosition().add(movementDistance);
    
    this.player.setPosition(newPlayerPos);
    this.stopMoving();
  }
  

  pstopMoving(){
    this.movementDirection = Direction.NONE;
  }

  getPixelsToWalkThisUpdate(delta) {
    const deltaInSeconds = delta / 1000;
    return this.speedPixelsPerSecond * deltaInSeconds;
  }
}
