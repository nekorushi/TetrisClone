import { BlockColor } from "./types";
import { Vector2 } from "../common/types";

export default class BlockVariant {
    cells: BlockColor[][]

    constructor(cells: BlockColor[][] = []) {
        this.cells = cells
    }

    forEachCell(callback: (position: Vector2) => void, ) {
        for (let y = 0; y < this.cells.length; y++) {
            const row = this.cells[y]

            for (let x = 0; x < row.length; x++) {
                const cell = row[x]
                if (cell !== BlockColor.Empty) {
                    callback(new Vector2(x, y))
                }
            }

        }
    }
};
