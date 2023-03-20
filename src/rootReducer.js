import { CHANGE_LANG } from "./types";

const initialLangState = {
    value: 'ru'
}

export function langReducer (state = initialLangState, action) {
    switch (action.type) {
        case CHANGE_LANG: 
            return {...state, value: 'en'}
        default: return state;
    }
}