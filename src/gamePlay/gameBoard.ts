import { BlockColor } from "../data/blocks/types"
import { Block } from "./block"
import { Vector2 } from "../data/common/types"
import get from 'lodash/get'

type Board = BlockColor[][]

export default class GameBoard {
    height: number
    width: number
    board: Board

    constructor(width: number, height: number) {
        this.height = height
        this.width = width
        this.board = this.generateEmptyBoard(width, height)
    }

    generateEmptyBoard(width: number, height: number): Board {
        const board: Board = []

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                board[x][y] = BlockColor.Empty
            }
        }

        return board
    }

    getCell(position: Vector2): BlockColor {
        return get(this.board, `[${position.x}][${position.y}]`, BlockColor.Empty)
    }

    canBePlacedAt(block: Block, x: number, y: number) {
        let result = true
        const blockSize = block.getSize()

        block.forEachCell((cell) => {
            const pos_x = cell.x + x
            const pos_y = cell.y + y
            const isOutOfHorizontalBounds = () => pos_x < 0 || pos_x + blockSize.x >= this.width
            const isOutOfVerticalBounds = () => pos_y < 0 || pos_y + blockSize.y >= this.height
            const boardCellIsOccupied = () => this.getCell({ x: pos_x, y: pos_y }) !== BlockColor.Empty
            
            if (isOutOfHorizontalBounds() || isOutOfVerticalBounds() || boardCellIsOccupied()) result = false
            return result
        })

        return result
    }
}