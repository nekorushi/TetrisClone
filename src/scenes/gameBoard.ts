import Board from '../gamePlay/board'
import PlayerBlock from '../gamePlay/playerBlock'
import BoardRenderer from './boardRenderer'

export default class GameBoardScene {
    boardController: Board
    renderer: BoardRenderer
    player: PlayerBlock

    constructor() {
        this.boardController = new Board(10, 20)
        this.player = new PlayerBlock(this.boardController)
        this.renderer = new BoardRenderer(this.player, this.boardController)        
    }


}