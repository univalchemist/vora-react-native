import * as ActionTypes from '../actionTypes/actionTypes'

export const updateProfile = (profile) => {
    return {type: ActionTypes.ACCOUNT_AUTH_SUCCESS, payload: {profile}}
}