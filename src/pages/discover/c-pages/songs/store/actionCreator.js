import * as actionTypes from './constants'
import { PER_PAGE_NUMBER } from './constants'

import {
    getSongCategory,
    getSongCategoryList
} from '@/services/songs'

import {
    handleSongsCategory
} from '@/utils/handle-data'

const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})

export const changeCurrentCateoryAction = (name) => ({
    type: actionTypes.CHANGE_CURRENT_CATEGORY,
    currentCategory: name
})

export const getCategory = () => {
    return dispatch => {
        getSongCategory().then(res => {
            const categoryData = handleSongsCategory(res)
            dispatch(changeCategoryAction(categoryData))
        })
    }
}

export const getSongList = (page) => {
    return (dispatch, getState) => {
        const name = getState().getIn(['songs', 'currentCategory'])

        getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
            dispatch(changeSongListAction(res))
        })
    }
}