import { BlockColor } from "../data/blocks/types"
import Block from "./block"
import { Vector2 } from "../data/common/types"
import get from 'lodash/get'
import set from 'lodash/set'
import BlockVariant from "../data/blocks/blockVariant"
import { getSetting } from "../config"

export default class Board {
    height: number
    width: number
    board: BlockColor[][]

    constructor(width: number, height: number) {
        this.height = height
        this.width = width
        this.board = this.generateEmptyBoard(width, height)
    }

    generateEmptyBoard(width: number, height: number): BlockColor[][] {
        const board: BlockColor[][] = []

        for (let y = 0; y < height; y++) {
            board[y] = []
            for (let x = 0; x < width; x++) {
                board[y][x] = BlockColor.Empty
            }
        }

        return board
    }

    getCell(position: Vector2): BlockColor {
        return get(this.board, `[${position.y}][${position.x}]`, BlockColor.Empty)
    }

    setCell(position: Vector2, type: BlockColor) {
        set(this.board, `[${position.y}][${position.x}]`, type)
    }

    canBePlacedAt(position: Vector2, block: Block, variant?: BlockVariant) {
        let result = true
        const blockVariant = variant || block.getCurrentVariant()

        blockVariant.forEachCell((cell: Vector2) => {
            const posX = cell.x + position.x
            const posY = cell.y + position.y
            const isOutOfHorizontalBounds = () => posX < 0 || posX >= this.width
            const isOutOfVerticalBounds = () => posY < 0 || posY >= this.height
            const boardCellIsOccupied = () => this.getCell(new Vector2(posX, posY)) !== BlockColor.Empty
            
            if (isOutOfHorizontalBounds() || isOutOfVerticalBounds() || boardCellIsOccupied()) result = false
        })

        return result
    }

    checkForFullRow(row: number) {                        
        for (let x = 0; x < this.width; x++) {
            const hasEmptyCell = this.getCell(new Vector2(x, row)) === BlockColor.Empty
            if (hasEmptyCell) return
        }
        return this.destroyRow(row)
    }

    destroyRow(row: number) {
        this.board.splice(row, 1)
        const newEmptyRow = Array
            .from({ length: getSetting('board.width') })
            .map(() => BlockColor.Empty)
        
        this.board.unshift(newEmptyRow)
    }

    forEachCell(fn: (position: Vector2, type: BlockColor) => void) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const pos = new Vector2(x,y)
                fn(pos, this.getCell(pos))
            }
        }
    }
}