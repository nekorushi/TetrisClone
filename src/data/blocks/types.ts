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
    [BlockColor.Blue]: 'assets/images/blocks/block_blue.png',
    [BlockColor.Green]: 'assets/images/blocks/block_green.png',
    [BlockColor.LightBlue]: 'assets/images/blocks/block_light_blue.png',
    [BlockColor.Orange]: 'assets/images/blocks/block_orange.png',
    [BlockColor.Pink]: 'assets/images/blocks/block_pink.png',
    [BlockColor.Red]: 'assets/images/blocks/block_red.png',
    [BlockColor.Violet]: 'assets/images/blocks/block_violet.png',
    [BlockColor.Yellow]: 'assets/images/blocks/block_yellow.png'
}