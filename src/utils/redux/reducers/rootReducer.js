import { combineReducers } from 'redux'
import { authReducer } from './authReducer';
import { progressReducer } from './progressReducer'
export const rootReducer = combineReducers({
    authReducer,
    progressReducer
})

export default rootReducer;