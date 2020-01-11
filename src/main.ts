import * as PIXI from 'pixi.js'

const webGLSupported = !PIXI.utils.isWebGLSupported()
const type = webGLSupported ? "WebGL" : "canvas"

PIXI.utils.sayHello(type)