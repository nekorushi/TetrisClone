import * as PIXI from 'pixi.js'

import { getSetting } from './config'
import { loadAssets } from './data/assets/assetsResolver'


const webGLSupported = PIXI.utils.isWebGLSupported()
const type = webGLSupported ? "WebGL" : "canvas"
PIXI.utils.sayHello(type)

const app = new PIXI.Application({
    width: getSetting('viewport.width'),
    height: getSetting('viewport.height')
})

const onAssetsLoaded = (): void => {
}

document.body.appendChild(app.view)
loadAssets(onAssetsLoaded)