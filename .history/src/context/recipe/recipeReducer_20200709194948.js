import {SEARCH_RECIPE, CHANGE_QUERY} from '../types'

export default (state, action) => {
    switch(action.type){
        case SEARCH_RECIPE:
            return {
                ...state,
                recipes : action.payload
            }
        default:
            return state
    }
}