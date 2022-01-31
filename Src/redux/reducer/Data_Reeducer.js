const INITIAL_STATE = {
    SpendLimit: null
}

const Data = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SUMBIT_SPENTLIMIT':
            console.log('reducer data', action.payload)
            return {
                ...state,
                SpendLimit: action.payload
            }
        default:
            return state
    }
}
export default Data;