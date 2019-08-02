import { Platform } from 'react-native'

// TODO - swap for HCCafe api endpoint
export const STYLES = {
    STATUS_BAR_HEIGHT: Platform.OS === 'ios' ? 80 : 100
}

export const FETCH_STATUS = {
    NOT_YET_FETCHED: 0,
    IS_FETCHING: 1,
    FETCH_SUCCESS: 2,
    FETCH_FAILED: 3
}

export const POST_STATUS = {
    NOT_YET_POSTED: 0,
    IS_POSTING: 1,
    POST_SUCCESS: 2,
    POST_FAILED: 3
}

export const DELETE_STATUS = {
    NOT_YET_DELETED: 0,
    IS_DELETING: 1,
    DELETE_SUCCESS: 2,
    DELETE_FAILED: 3
}

export const PATCH_STATUS = {
    NOT_YET_PATCHED: 0,
    IS_PATCHING: 1,
    PATCH_SUCCESS: 2,
    PATCH_FAILED: 3
}

export const COLORS = {
    BACKGROUND: '#e0dedd',
    RED: '#ef3e36',
    GRAY: '#5c5d5b',
    BLACK: '#000',
    // OFF_WHITE: '#f6f4f3'
}
