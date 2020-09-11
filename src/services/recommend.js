import request from './request'

export function getTopBanner() {
    return request({
        url: '/banner'
    })
}

export function getHotRecommend() {
    return request({
        url: '/personalized'
    })
}

export function getNewAlbum(limmit, offset) {
    return request({
        url: '/top/album',
        params: {
            limmit,
            offset
        }
    })
}

export function getArtistList(limmit, cat) {
    return request({
        url: '/artist/list',
        params: {
            limmit,
            cat
        }
    })
}

export function getTopList(idx) {
    return request({
        url: '/top/list',
        params: {
            idx
        }
    })
}