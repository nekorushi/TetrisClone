import get from 'lodash/get'

export const getSetting = (path: string) => get(config, path, 0)

const config = {
    viewport: {
        width: 640,
        height: 960
    },
    board: {
        width: 10,
        height: 20,
        offset: {
            x: 9,
            y: 111
        },
        cell: {
            margin: 0,
            width: 42,
            height: 42
        }
    }
}