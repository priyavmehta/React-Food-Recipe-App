import {SEARCH_RECIPE, SET_ALERT} from '../types'

export default (state, action) => {
    switch(action.type){
        case SET_ALERT:
            return{
                ...state,
                alert: action.payload
            }
        case SEARCH_RECIPE:
            return {
                ...state,
                recipes : action.payload,
                alert: ""
            }
        default:
            return state
    }
}