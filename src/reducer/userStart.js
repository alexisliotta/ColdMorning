import {SAVE_USERSTART} from '../action/userStartAction';

const state_default ={
    infouser: {}
}

export default (state = state_default, action)=>{
    switch(action.type){
        case SAVE_USERSTART:
            return{
                ...state,
                 infouser: action.payload,
            }
        default:
            return state;
    }
}

