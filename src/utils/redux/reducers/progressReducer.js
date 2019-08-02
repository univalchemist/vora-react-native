import * as ActionTypes from '../actionTypes/actionTypes'


const initialState = {
    flag: false,
}

export const progressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_FLAG:
            return {...state, flag: action.payload }
        default:
            return state
    }
}