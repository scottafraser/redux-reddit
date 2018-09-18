import feedReducer from './feed-reducer';
import likeReducer from './like-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    masterFeedList: feedReducer,
    likes: likeReducer
});

export default rootReducer;