import { BlockColor } from "./types"
import { Block } from "../../gamePlay/block"

export const Blocks: Block[] = [
    {
        color: BlockColor.Green,
        variants: [[
            [1, 0],
            [1, 1],
            [0, 1]
        ], [
            [0,  1,  1],
            [1,  1,  0]
        ]]
    },
    {
        color: BlockColor.Orange,
        variants: [[
            [1, 1],
            [1, 1]
        ]]
    },
    {
        color: BlockColor.Violet,
        variants: [[
            [1,  1,  1,  1]
        ], [
            [1],
            [1],
            [1],
            [1]
        ]]
    },
    {
        color: BlockColor.LightBlue,
        variants: [[
            [0, 1],
            [1, 1],
            [0, 1]
        ], [
            [0, 1, 0],
            [1, 1, 1]
        ], [
            [1, 0],
            [1, 1],
            [1, 0]
        ], [
            [1, 1, 1],
            [0, 1, 0]
        ]]
    },
    {
        color: BlockColor.Blue,
        variants: [[
            [1, 1, 1],
            [1, 0, 0]
        ], [
            [1, 1],
            [0, 1],
            [0, 1]
        ], [
            [0, 0, 1],
            [1, 1, 1]
        ], [
            [1, 0],
            [1, 0],
            [1, 1]
        ]]
    },
    {
        color: BlockColor.Red,
        variants: [[
            [1, 1, 0],
            [0, 1, 1]
        ], [
            [0, 1],
            [1, 1],
            [1, 0]
        ]]
    },
    {
        color: BlockColor.Pink,
        variants: [[
            [1, 1, 1],
            [0, 0, 1]
        ], [
            [0, 1],
            [0, 1],
            [1, 1]
        ], [
            [1, 0, 0],
            [1, 1, 1]
        ], [
            [1, 1],
            [1, 0],
            [1, 0]
        ]]
    },
    {
        color: BlockColor.Yellow,
        variants: [[
            [1, 1, 1],
            [1, 1, 1]
        ], [
            [1, 1],
            [1, 1],
            [1, 1]
        ]]
    }
]