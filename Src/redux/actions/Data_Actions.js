import {
    SUMBIT_SPENTLIMIT
} from './actionTypes'

// Submit data
export function Submit(data) {
    console.log('action data', data)
    return dispatch => {
        dispatch({ type: SUMBIT_SPENTLIMIT, payload: data });
    };
};