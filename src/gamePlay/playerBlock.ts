import { Vector2 } from "../data/common/types";
import { getSetting } from "../config";

import Block from "./block";
import Board from "./board";
import BlockRandomizer from "./blockRandomizer";

const KEY = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    UP: 'ArrowUp',
    DOWN: 'ArrowDown'
}

export default class PlayerBlock {
    currentBlock!: Block
    onPlayerMove?: Function
    board: Board
    position: Vector2 = new Vector2()
    blockRandomizer: BlockRandomizer

    constructor(board: Board, onPlayerMove?: Function) {
        this.onPlayerMove = onPlayerMove
        this.blockRandomizer = new BlockRandomizer()
        this.rollNextBlock()
        this.board = board
        
        window.addEventListener('keydown', (event) => {this.inputHandler(event)})
    }

    rollNextBlock() {
        const newBlock = this.blockRandomizer.getRandomBlock()
        const boardWidth = getSetting('board.width')
        const blockWidth = newBlock.getCurrentVariant().cells[0].length
        this.currentBlock = newBlock        
        this.position = new Vector2(Math.floor(boardWidth / 2 - blockWidth / 2), 0)
    }

    rotate() {
        const newRotation = this.currentBlock.getNextVariant()
        if (this.board.canBePlacedAt(this.position, this.currentBlock, newRotation)) {
            this.currentBlock.rotate()
        }        
    }

    move(direction: Vector2) {
        const newPosition = this.position.add(direction)
        const canBePlaced = this.board.canBePlacedAt(newPosition, this.currentBlock)
        if (canBePlaced) this.position = newPosition
        return canBePlaced
    }

    drop() {        
        const canGoDown = this.move(new Vector2(0, 1))
        if (!canGoDown) this.lockIn()
    }

    lockIn() {
        const block = this.currentBlock.getCurrentVariant()

        block.forEachCell((position) => {
            const cellPosition = this.position.add(position)
            this.board.setCell(cellPosition, this.currentBlock.type)
        })

        block.cells.forEach((type, row) => {
            this.board.checkForFullRow(this.position.y + row)
        })
        
        this.rollNextBlock()
    }

    inputHandler(event: KeyboardEvent) {        
        switch (event.code) {
            case KEY.UP:
                this.rotate()
                break;
            case KEY.LEFT:
                this.move(new Vector2(-1, 0))
                break;
            case KEY.RIGHT:
                this.move(new Vector2(1, 0))
                break;
            case KEY.DOWN:
                this.drop()
                break;
        }
        this.onPlayerMove && this.onPlayerMove()
    }    
}