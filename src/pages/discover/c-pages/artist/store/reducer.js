import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
    currentArea: 7,
    currentType: {
        name: '推荐歌手',
        type: 1
    },
    artistList: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_AREA:
            return state.set('currentArea', action.currentArea)
        case actionTypes.CHANGE_CURRENT_TYPE:
            return state.set('currentType', action.currentType)
        case actionTypes.CHANGE_ARTIST_LIST:
            return state.set('artlistList', action.artistList)
        default:
            return state
    }
}