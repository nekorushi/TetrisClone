import { BlockColor } from "../data/blocks/types";
import BlockVariant from "../data/blocks/blockVariant";

export default class Block {
    type: BlockColor
    variants: BlockVariant[]
    private currentVariant: number

    constructor(type: BlockColor, variants: BlockVariant[]) {
        this.currentVariant = 0
        this.type = type
        this.variants = variants
    }
    
    getVariant = (variant: number) => this.variants[variant]
    getCurrentVariant = () => this.getVariant(this.currentVariant)
    getNextVariant = () => this.getVariant(this.getNextVariantIndex())
    getNextVariantIndex() {
        const nextVariant = this.currentVariant + 1        
        return nextVariant >= this.variants.length ? 0 : nextVariant
    }

    rotate() {
        this.currentVariant = this.getNextVariantIndex()        
    }
}