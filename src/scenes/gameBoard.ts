import Board from '../gamePlay/board'
import PlayerBlock from '../gamePlay/playerBlock'
import BoardRenderer from './boardRenderer'
import { getSetting } from '../config'
import Score from '../gamePlay/score'

export default class GameBoardScene {
    boardController: Board
    renderer: BoardRenderer
    player: PlayerBlock
    scoreManager: Score
    stepDuration: number
    stepTimer!: number

    constructor() {
        this.boardController = new Board(10, 20)
        this.boardController.handleRowDestroy(() => { this.onRowDestroy() })
        this.player = new PlayerBlock(this.boardController)
        this.scoreManager = new Score()
        this.renderer = new BoardRenderer(this.player, this.boardController)
        this.stepDuration = getSetting('gameplay.stepIntervals')
        this.resetTimer()
    }

    onRowDestroy() {
        this.scoreManager.addScore()
        this.renderer.setScore(this.scoreManager.score)
        
    }

    update(dt: number) {
        this.stepTimer += dt
        if (this.stepTimer >= this.stepDuration) {
            this.triggerStep()
            this.resetTimer()
        }
    }

    triggerStep() {
        this.player.drop()
    }

    resetTimer() {
        this.stepTimer = 0
    }
}