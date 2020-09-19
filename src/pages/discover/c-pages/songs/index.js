import React, { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import {
    getCategory,
    getSongList,
    changeCurrentCateoryAction
} from './store/actionCreator'
import LxbSongsHeader from './c-components/songs-header'
import LxxbSongsList from './c-components/songs-list'
import { SongWrapper } from "./style";

const LxbSongs = memo(() => {
    const dispatch = useDispatch()
    const cat = useLocation().cat

    useEffect(() => {
        dispatch(changeCurrentCateoryAction(cat));
    },[dispatch, cat])

    useEffect(() => {
        dispatch(getCategory())
        dispatch(getSongList(0))
    }, [dispatch])

    return (
        <SongWrapper className="wrap-v2">
            <LxbSongsHeader />
            <LxxbSongsList />
        </SongWrapper>
    );
});

export default LxbSongs;