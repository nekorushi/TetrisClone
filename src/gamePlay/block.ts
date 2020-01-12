import { BlockVariant, BlockColor } from "../data/blocks/types";

export class Block {
    color: BlockColor
    variants: BlockVariant[]

    constructor(color: BlockColor, variants: BlockVariant[]) {
        this.color = color
        this.variants = variants
    }
}