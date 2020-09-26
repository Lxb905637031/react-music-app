import React, { memo } from 'react';

import LxbHotAlbum from './c-components/hot-album'
import LxbTopAlbum from './c-components/top-album'
import { AblumWrapper } from './style'

const LxbAlbum = memo(() => {
    return (
        <AblumWrapper className="wrap-v2">
            <LxbHotAlbum />
            <LxbTopAlbum />
        </AblumWrapper>
    );
});

export default LxbAlbum;