export default class Score {
    score!: number

    constructor() {
        this.resetScore()
    }

    addScore() {
        this.score++
    }

    resetScore() {
        this.score = 0
    }
}