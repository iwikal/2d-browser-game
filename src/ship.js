import {
  Sprite,
  loader
} from 'pixi.js'
import keyboard from './keyboard'

class Ship {
  constructor (options = {}) {
    const {
      position = {},
      velocity = {}
    } = options

    const texture = loader.resources['assets/att5.png'].texture
    this.sprite = new Sprite(texture)
    this.sprite.anchor.set(0.5, 0.5)

    {
      const { x = 0, y = 0 } = position
      this.sprite.position.set(x, y)
    }

    {
      const { x = 0, y = 0 } = velocity
      this.velocity = { x, y }
    }

    this.acceleration = 1 / 4
  }

  update (delta) {
    const deltaV = this.acceleration * delta

    if (keyboard['KeyW']) this.velocity.y -= deltaV
    if (keyboard['KeyA']) this.velocity.x -= deltaV
    if (keyboard['KeyS']) this.velocity.y += deltaV
    if (keyboard['KeyD']) this.velocity.x += deltaV

    this.sprite.x += this.velocity.x
    this.sprite.y += this.velocity.y
  }
}

export default Ship
