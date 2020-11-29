import wheaterReducer from './wheaterReducer.js';
import newReducer from './newsReducer';
import { combineReducers } from 'redux';
import userStart from './userStart';

const rootReducer = combineReducers({
    wheaterReducer: wheaterReducer,
    newsReducer: newReducer,
    userStart: userStart,
})

export default rootReducer;

