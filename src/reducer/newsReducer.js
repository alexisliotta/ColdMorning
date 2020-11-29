import {SAVE_NEWS} from '../action/newsAction.js';

const state_default ={
    news: []
}

export default (state = state_default, action)=>{
    switch(action.type){
        case SAVE_NEWS:
            return{
                ...state,
                 news: action.payload,
            }
        default:
            return state;
    }
}

