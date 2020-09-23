import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import LxbThemeHeaderNormal from '@/components/theme-header-normal'
import LxbAlphaList from './c-components/alpha-list'
import LxbArtistItem from './c-components/artist-item'
import {
    ArtistListWrapper
} from './style'

export default memo(function LxbArtistList() {
    const { currentType, artistList } = useSelector(state => ({
        currentType: state.getIn(['artist','currentType']),
        artistList: state.getIn(['artist', 'artistList'])
    }), shallowEqual)

    return (
      <ArtistListWrapper>
        <LxbThemeHeaderNormal title={currentType.name} />
        <LxbAlphaList />
        <div className="artist-list">
            {
                artistList.map((item, index) => {
                    return <LxbArtistItem key={item.id} index={index} info={item} />
                })
            }
        </div>
      </ArtistListWrapper>
    );
})