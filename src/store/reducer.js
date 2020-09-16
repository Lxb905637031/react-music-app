import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store';
import { reducer as rankingReducer } from '@/pages/discover/c-pages/ranking/store';

export default combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer
});

