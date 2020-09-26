import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getHotAlbumsAction } from '../../store/actionCreator'

import LxbAlbumCover from '@/components/album-cover'
import LxbThemeHeaderNormal from '@/components/theme-header-normal'
import {
    HotAlbumWrapper
} from './style'

export default memo(function LxbHotAlbum() {
    const { hotAlums } = useSelector(state => ({
        hotAlums: state.getIn(['album', 'hotAlbums'])
    }), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotAlbumsAction())
    },[dispatch])

    return (
        <HotAlbumWrapper>
            <LxbThemeHeaderNormal title="热门新碟"/>
            <div className="album-list">
                {
                    hotAlums.slice(0, 10).map((item, index) => {
                        return <LxbAlbumCover
                                    size={'130px'}
                                    width={'153px'}
                                    bgp={'-845px'}
                                    key={item.id}
                                    info={item}
                                />
                    })
                }
            </div>
        </HotAlbumWrapper>
    )
})