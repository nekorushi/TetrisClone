export enum BlockColor {
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

export type BlockVariant = BlockColor[][]

export const BlockImages = {
    [BlockColor.Blue]: 'block_blue.png',
    [BlockColor.Green]: 'block_green.png',
    [BlockColor.LightBlue]: 'block_light_blue.png',
    [BlockColor.Orange]: 'block_orange.png',
    [BlockColor.Pink]: 'block_pink.png',
    [BlockColor.Red]: 'block_red.png',
    [BlockColor.Violet]: 'block_violet.png',
    [BlockColor.Yellow]: 'block_yellow.png'
}