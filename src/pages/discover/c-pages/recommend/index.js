import React, { memo } from 'react';

import LxbTopBanner from './c-components/top-banner';
import LxbHotRecommend from './c-components/hot-recommend'
import LxbNewAlbum from './c-components/new-album'
import LxbUserLogin from './c-components/user-login'
import LxbSetteleSinger from './c-components/settle-singer'
import LxbHotRadio from './c-components/hot-radio'
import LxbRankingList from './c-components/ranking-list'

import {
  Content,
  RecommendLeft,
  RecommendRight,
  RecommendWrapper,
} from "./style"
const LxbRecommend = memo(() => {
    return (
        <RecommendWrapper>
            <LxbTopBanner/>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <LxbHotRecommend />
                    <LxbNewAlbum />
                    <LxbRankingList />
                </RecommendLeft>
                <RecommendRight>
                    <LxbUserLogin />
                    <LxbSetteleSinger />
                    <LxbHotRadio />
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    );
});

export default LxbRecommend;