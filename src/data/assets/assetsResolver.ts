import * as PIXI from 'pixi.js'
import values from 'lodash/values'

import { BlockImages } from '../blocks/types'

export const loadAssets = (callback?: () => void) => {
    const loader = PIXI.Loader.shared
    const block_sprites = getBlockSpritesList()

    loader
        .add([
            'assets/images/bg_full.jpg',
            ...block_sprites
        ])
        .load(callback)
}

const getBlockSpritesList = (): string[] => values(BlockImages)