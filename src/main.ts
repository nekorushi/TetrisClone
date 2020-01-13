import * as PIXI from 'pixi.js'

import { getSetting } from './config'
import { loadAssets } from './data/assets/assetsResolver'

import GameBoardScene from './scenes/gameBoard'

const webGLSupported = PIXI.utils.isWebGLSupported()
const type = webGLSupported ? "WebGL" : "canvas"
PIXI.utils.sayHello(type)

const app = new PIXI.Application({
    width: getSetting('viewport.width'),
    height: getSetting('viewport.height')
})

const onAssetsLoaded = (): void => {
    const gameBoardScene = new GameBoardScene()
    app.stage.addChild(gameBoardScene.renderer.renderContainer)    
    app.ticker.add(update)
}

const update = (dt: number): void => {
    
}

document.body.appendChild(app.view)
loadAssets(onAssetsLoaded)