import { SAVE_COUNTRY } from '../action/WheaterAction.js';

const state_default = {
    countrySerch: null,
    loading: true,
}

export default (state = state_default, action) => {
    switch (action.type) {
        case SAVE_COUNTRY:
            return {
                ...state,
                countrySerch: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

