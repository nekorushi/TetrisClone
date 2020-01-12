export enum BlockColors {
    Empty,
    Blue,
    Green,
    LightBlue,
    Orange,
    Pink,
    Red,
    Violet,
    Yellow
}

export const BlockImages = {
    [BlockColors.Blue]: 'block_blue.png',
    [BlockColors.Green]: 'block_green.png',
    [BlockColors.LightBlue]: 'block_light_blue.png',
    [BlockColors.Orange]: 'block_orange.png',
    [BlockColors.Pink]: 'block_pink.png',
    [BlockColors.Red]: 'block_red.png',
    [BlockColors.Violet]: 'block_violet.png',
    [BlockColors.Yellow]: 'block_yellow.png'
}

export const Blocks = [
    {
        color: BlockColors.Green,
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
        color: BlockColors.Orange,
        variants: [[
            [1, 1],
            [1, 1]
        ]]
    },
    {
        color: BlockColors.Violet,
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
        color: BlockColors.LightBlue,
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
        color: BlockColors.Blue,
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
        color: BlockColors.Red,
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
        color: BlockColors.Pink,
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
        color: BlockColors.Yellow,
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