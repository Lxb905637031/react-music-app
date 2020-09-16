import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getTops } from './store/actionCreator'

import LxbTopRanking from './c-components/top-ranking';
import LxbRankingHeader from './c-components/ranking-header';
import LxbRankingList from './c-components/ranking-list';
import { RankingWrapper, RankingLeft, RankingRight } from "./style";
import { useEffect } from 'react';

const LxbRanking = memo(() => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getTops())
    },[dispatch])

    return (
      <RankingWrapper className="wrap-v2">
        <RankingLeft>
          <LxbTopRanking />
        </RankingLeft>
        <RankingRight>
          <LxbRankingHeader />
          <LxbRankingList />
        </RankingRight>
      </RankingWrapper>
    );
});

export default LxbRanking;