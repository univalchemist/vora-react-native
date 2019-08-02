import * as ActionTypes from '../actionTypes/actionTypes'
import { POST_STATUS } from '../../../config'

const initialState = {
    postStatus: POST_STATUS.NOT_YET_POSTED,
    postErrorResponse: '',
    token: null,
    returnUrl: null,
    userDetails: {},
    profile: null,
    actionTime: 0
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        /*===============================================================
        = AUTHENTICATE ACCOUNT
        ===============================================================*/

        case ActionTypes.ACCOUNT_AUTH_START:
            return {
                ...state,
                postStatus: POST_STATUS.IS_POSTING
            }

        case ActionTypes.ACCOUNT_AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userDetails: action.payload.user,
                postStatus: POST_STATUS.POST_SUCCESS,
                profile: action.payload.profile
            }

        case ActionTypes.ACCOUNT_AUTH_FAIL:
            return {
                ...state,
                postStatus: POST_STATUS.POST_FAILED,
                postErrorResponse: action.payload.status
            }



        /*===============================================================
        = SETTING RETURN URI IF USER WAS PROMPTED TO LOGIN
        ===============================================================*/

        // return uri will return user to the screen they were on prior to prompt after successful login
        case ActionTypes.SET_RETURN_URL:
            return {
                ...state,
                returnUrl: action.returnUrl
            }


        /*===============================================================
        = STORING USER TOKEN
        ===============================================================*/

        case ActionTypes.SET_USER_TOKEN:
            return {
                ...state,
                token: action.token
            }



        /*===============================================================
        = RESET POST STATUS AFTER REDIRECT
        ===============================================================*/

        case ActionTypes.RESET_POST_STATUS:
        case ActionTypes.RESET_POST_AUTH_STATUS:
            return {
                ...state,
                postStatus: POST_STATUS.NOT_YET_POSTED
            }
        case ActionTypes.COUNT_ACTION_TIME:
            return {
                ...state,
                actionTime: action.count
            }

        /*===============================================================
        = ON LOGOUT, RESET AUTH STORE
        ===============================================================*/

        case ActionTypes.USER_LOGOUT:
            return initialState



        default: return state
    }
}