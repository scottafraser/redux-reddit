import feedReducer from './feed-reducer';
import likeReducer from './like-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    theFeedReducer: feedReducer,
    theLikeReducer: likeReducer
});

export default rootReducer;