import {
  Application,
  loader
} from 'pixi.js'
import Ship from './ship'

const app = new Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true
})
app.renderer.view.style.position = 'absolute'
app.renderer.view.style.display = 'block'
app.renderer.autoResize = true
document.body.appendChild(app.view)

const resize = () => {
  app.renderer.resize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', resize)

const setup = () => {
  const ship = new Ship({
    position: {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }
  })

  app.stage.addChild(ship.sprite)

  const gameLoop = (delta) => {
    ship.update(delta)
  }

  app.ticker.add(gameLoop)
}

loader
  .add('assets/att5.png')
  .load(setup)
