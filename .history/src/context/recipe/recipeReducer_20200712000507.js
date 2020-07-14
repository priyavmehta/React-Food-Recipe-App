import {SEARCH_RECIPE, SET_ALERT, REMOVE_ALERT, SET_HOME_PAGE, NAVBAR_SEARCH_RECIPE} from '../types'

export default (state, action) => {
    switch(action.type){
        case SET_HOME_PAGE:
            return{
                ...state,
                recipes : action.payload
            }
        case NAVBAR_SEARCH_RECIPE: 
            return{
                ...state,
                navbar_recipes : action.payload,
                alert : ""
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
                search_recipes : action.payload,
                alert: ""
            }
        default:
            return state
    }
}