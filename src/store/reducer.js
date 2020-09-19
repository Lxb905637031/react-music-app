import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store';
import { reducer as rankingReducer } from '@/pages/discover/c-pages/ranking/store';
import { reducer as songsReducer } from '@/pages/discover/c-pages/songs/store'

export default combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songsReducer
});

