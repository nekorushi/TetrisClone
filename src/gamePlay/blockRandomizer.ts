import random from 'lodash/random'

import { Blocks } from '../data/blocks/availableBlocks'
import Block from './block'

export default class BlockRandomizer {
    blocks: Block[]

    constructor() {
        this.blocks = []
    }

    getRandomBlock() {
        if (this.blocks.length == 0) this.resetBlocksPool()
        const randomBlockIndex = random(0, this.blocks.length-1)
        return this.blocks.splice(randomBlockIndex, 1)[0]
    }

    resetBlocksPool() {
        for (var i = 0; i < 4; i++) {
            this.blocks.push(...Blocks)
        }
    }
}