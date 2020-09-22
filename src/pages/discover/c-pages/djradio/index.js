import React, { memo } from 'react';

import LxbRadioCategory from './c-components/radio-category'
import LxbRadioRanking from './c-components/radio-ranking'
import LxbRadioRecommend from './c-components/radios-recommend'

import {
    DjRadioWrapper
} from './style'
const LxbDjradio = memo(() => {
    return (
        <div>
            <DjRadioWrapper className="wrap-v2">
                <LxbRadioCategory />
                <LxbRadioRecommend />
                <LxbRadioRanking />
            </DjRadioWrapper>
        </div>
    );
});

export default LxbDjradio;