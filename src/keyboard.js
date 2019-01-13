const keys = {}

const handleKeydown = (event) => {
  keys[event.code] = true
}
window.addEventListener('keydown', handleKeydown)

const handleKeyup = (event) => {
  keys[event.code] = false
}
window.addEventListener('keyup', handleKeyup)

export default keys
