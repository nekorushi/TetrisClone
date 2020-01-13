import * as PIXI from 'pixi.js'

import get from "lodash/get"
import set from "lodash/set"

import { getSetting } from "../config"
import { Vector2 } from "../data/common/types"
import { BlockColor, BlockImages } from "../data/blocks/types"

import PlayerBlock from "../gamePlay/playerBlock"
import Board from "../gamePlay/board"


export default class BoardRenderer {
    renderContainer: PIXI.Container
    player: PlayerBlock
    boardController: Board
    sprites: PIXI.Sprite[][] = []

    settings = {
        cellWidth: getSetting('board.cell.width'),
        cellHeight: getSetting('board.cell.height'),
        offsetX: getSetting('board.offset.x'),
        offsetY: getSetting('board.offset.y')
    }

    constructor(player: PlayerBlock, boardController: Board) {
        this.player = player
        this.boardController = boardController
        this.renderContainer = this.initializeScene()
        this.renderBoard()
        this.player.onPlayerMove = () => this.renderBoard()
    }
    
    renderBoard() {
        const playerBlock = this.player.currentBlock
        this.boardController.forEachCell(
            (position: Vector2, type: BlockColor) => { this.renderCell(position, type) }
        )
        playerBlock.getCurrentVariant().forEachCell((position: Vector2) => {
            this.renderCell(position.add(this.player.position), playerBlock.type)
        })
    }

    initializeScene() {
        const scene = new PIXI.Container()
        const resources = PIXI.Loader.shared.resources
        
        const background = new PIXI.Sprite(resources['assets/images/bg_full.jpg'].texture)
        scene.addChild(background)
        return scene
    }

    renderCell(position: Vector2, cellColor: BlockColor) {
        const resources = PIXI.Loader.shared.resources
        const settings = this.settings

        const sprite = this.getOrCreateSprite(position)
        const texture = cellColor !== BlockColor.Empty
            ? resources[BlockImages[cellColor]].texture
            : undefined
            
        sprite.texture = texture
        sprite.x = position.x * settings.cellWidth + settings.offsetX
        sprite.y = position.y * settings.cellHeight + settings.offsetY        
    }

    getOrCreateSprite(position: Vector2) {
        let sprite = get(this.sprites, `[${position.y}][${position.x}]`)

        if (!sprite) {
            sprite = new PIXI.Sprite()
            set(this.sprites, `[${position.y}][${position.x}]`, sprite)
            this.renderContainer.addChild(sprite)
        }

        return sprite
    }
}