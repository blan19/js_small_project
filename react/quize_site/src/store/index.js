import { combineReducers } from 'redux';
import score from './modules/score';

const rootReducer = combineReducers({
	score,
});

export default rootReducer;
