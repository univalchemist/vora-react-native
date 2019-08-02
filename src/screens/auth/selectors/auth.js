import { POST_STATUS } from '../../../config'
import { NAME } from '../reducer'

/*===========================================================
= POST_STATUS
===========================================================*/

export const getPostStatus = state => state[NAME].auth.postStatus

export const isPosting = state => getPostStatus(state) == POST_STATUS.IS_POSTING
export const postError = state => getPostStatus(state) == POST_STATUS.POST_FAILED
export const postSuccess = state => getPostStatus(state) == POST_STATUS.POST_SUCCESS
export const postErrorResponse = state => state[NAME].auth.postErrorResponse


/*===========================================================
= SPECIFIC SELECTORS
===========================================================*/

export const getToken = state => state[NAME].auth.token
export const getReturnUrl = state => state[NAME].auth.returnUrl