import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopData } from '../../store/actionCreator'

import LxbThemeHeaderRCM from '@/components/theme-header-rcm'
import LxbTopRanking from '@/components/top-ranking'

import { RankingWrapper } from './style'

export default memo(function LxbRankingList() {
    const dispatch = useDispatch()
    const state = useSelector((state) => ({
        topUpList: state.getIn(['recommend','topUpList']),
        topNewList: state.getIn(['recommend', 'topNewList']),
        topOriginList: state.getIn(['recommend', 'topOriginList'])
    }),shallowEqual)

    useEffect(() => {
        dispatch(getTopData(0))
        dispatch(getTopData(2))
        dispatch(getTopData(3))
    },[dispatch])

    return (
      <RankingWrapper>
        <LxbThemeHeaderRCM title="榜单" moreLink="/discover/ranking" />
        <div className="tops">
          <LxbTopRanking info={state.topUpList} />
          <LxbTopRanking info={state.topNewList} />
          <LxbTopRanking info={state.topOriginList} />
        </div>
      </RankingWrapper>
    );
})