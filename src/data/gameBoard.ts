import { BlockColors } from "./blocks/blockTypes"

type Board = BlockColors[][]

export default class GameBoard {
    height: number
    width: number
    board: Board

    constructor(width: number, height: number) {
        this.height = height
        this.width = width
        this.board = this.generateEmptyBoard({ width, height })
    }

    generateEmptyBoard(
        { width, height } : { width: number, height: number }
    ): Board {
        const board: Board = []

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                board[x][y] = BlockColors.Empty
            }
        }

        return board
    }
}