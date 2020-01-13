export class Vector2 {
    x: number
    y: number

    constructor(x = 0, y = 0) {
        this.x = x,
        this.y = y
    }

    add(other: Vector2) {
        return new Vector2(
            this.x + other.x,
            this.y + other.y
        )
    }
}