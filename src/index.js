import {
  Application,
  Sprite,
  loader
} from 'pixi.js'

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
  const ship = new Sprite(
    loader.resources['assets/att5.png'].texture
  )

  ship.anchor.set(0.5, 0.5)
  ship.position.set(app.screen.width / 2, app.screen.height / 2)
  app.stage.addChild(ship)

  const gameLoop = delta => {
    const speed = 1 / 16
    ship.rotation += delta * speed
  }

  app.ticker.add(gameLoop)
}

loader
  .add('assets/att5.png')
  .load(setup)
