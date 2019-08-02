import * as ActionTypes from '../actionTypes/actionTypes'

export const updateActionCount = count => ({
    type: ActionTypes.COUNT_ACTION_TIME,
    count
});
export const updateProgressFlag = (flag) => {
    return { type: ActionTypes.SHOW_FLAG, payload: flag }
};


