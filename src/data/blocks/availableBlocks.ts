import { BlockColor } from "./types"
import Block from "../../gamePlay/block"
import BlockVariant from "./blockVariant"

export const Blocks: Block[] = [
    new Block(BlockColor.Green, [
        new BlockVariant([
            [1, 0],
            [1, 1],
            [0, 1]
        ]), 
        new BlockVariant([
            [0,  1,  1],
            [1,  1,  0]
        ])
    ]),
    new Block(BlockColor.Orange, [
        new BlockVariant([
            [1, 1],
            [1, 1]
        ])
    ]),
    new Block(BlockColor.Violet, [
        new BlockVariant([
            [1,  1,  1,  1]
        ]),
        new BlockVariant([
            [1],
            [1],
            [1],
            [1]
        ])
    ]),
    new Block(BlockColor.LightBlue, [
        new BlockVariant([
            [0, 1],
            [1, 1],
            [0, 1]
        ]), 
        new BlockVariant([
            [0, 1, 0],
            [1, 1, 1]
        ]),
        new BlockVariant([
            [1, 0],
            [1, 1],
            [1, 0]
        ]),
        new BlockVariant([
            [1, 1, 1],
            [0, 1, 0]
        ])
    ]),
    new Block(BlockColor.Blue, [
        new BlockVariant([
            [1, 1, 1],
            [1, 0, 0]
        ]),
        new BlockVariant([
            [1, 1],
            [0, 1],
            [0, 1]
        ]),
        new BlockVariant([
            [0, 0, 1],
            [1, 1, 1]
        ]),
        new BlockVariant([
            [1, 0],
            [1, 0],
            [1, 1]
        ])
    ]),
    new Block(BlockColor.Red, [
        new BlockVariant([
            [1, 1, 0],
            [0, 1, 1]
        ]),
        new BlockVariant([
            [0, 1],
            [1, 1],
            [1, 0]
        ])
    ]),
    new Block(BlockColor.Pink, [
        new BlockVariant([
            [1, 1, 1],
            [0, 0, 1]
        ]),
        new BlockVariant([
            [0, 1],
            [0, 1],
            [1, 1]
        ]),
        new BlockVariant([
            [1, 0, 0],
            [1, 1, 1]
        ]),
        new BlockVariant([
            [1, 1],
            [1, 0],
            [1, 0]
        ])
    ]),
    new Block(BlockColor.Yellow, [
        new BlockVariant([
            [1, 1, 1],
            [1, 1, 1]
        ]),
        new BlockVariant([
            [1, 1],
            [1, 1],
            [1, 1]
        ])
    ]),
]