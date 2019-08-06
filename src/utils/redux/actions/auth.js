import * as ActionTypes from '../actionTypes/actionTypes'

export const updateProfile = (profile, username) => {
    return {type: ActionTypes.ACCOUNT_AUTH_SUCCESS, payload: {profile, username}}
}