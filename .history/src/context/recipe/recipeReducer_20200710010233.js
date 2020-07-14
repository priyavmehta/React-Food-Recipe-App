import {SEARCH_RECIPE, SET_ALERT, REMOVE_ALERT, SET_HOME_PAGE} from '../types'

export default (state, action) => {
    switch(action.type){
        case SET_HOME_PAGE:
            return{
                ...state,
                recipes : action.payload
            }
        case REMOVE_ALERT:
            return{
                ...state,
                alert: ""
            }
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