import { BlockVariant, BlockColor } from "../data/blocks/types";
import { Vector2 } from "../data/common/types";

export class Block {
    color: BlockColor
    variants: BlockVariant[]
    private _currentVariant: number

    constructor(color: BlockColor, variants: BlockVariant[]) {
        this._currentVariant = 0
        this.color = color
        this.variants = variants
    }

    getCurrentVariant = () => this.variants[this._currentVariant]

    getSize(): Vector2 {
        const block = this.getCurrentVariant()
        return {
            x: block[0].length,
            y: block.length
        }
    }

    forEachCell(callback: (cellMeta: Vector2) => boolean) {
        const blockRows = this.getCurrentVariant()
        for (let y = 0; y < blockRows.length; y++) {
            const row = blockRows[y]

            for (let x = 0; x < row.length; x++) {
                const cell = row[x]
                if (cell !== BlockColor.Empty) {
                    if (callback({ x, y })) return
                }
            }

        }
    }

    rotate() {
        this._currentVariant++
        if (this._currentVariant >= this.variants.length) this._currentVariant = 0
    }
}