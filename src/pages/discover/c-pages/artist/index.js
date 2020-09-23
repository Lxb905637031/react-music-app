import React, { memo } from 'react';

import LxbArtistCategory from './c-components/artist-category'
import LxbArtistList from './c-components/artist-list'
import { ArtistWrapper } from "./style";

const LxbArtist = memo(() => {
    return (
      <ArtistWrapper>
        <div className="content wrap-v2">
          <LxbArtistCategory />
          <LxbArtistList />
        </div>
      </ArtistWrapper>
    );
});

export default LxbArtist;