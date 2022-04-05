const initialState = {
    data: {}
}

const SET_ACCOUNT = 'SET_ACCOUNT'
export const setAccount = (data) => ({ type: SET_ACCOUNT, payload: data })

export default function accountReducer(state = initialState, action) {
    if (action.type === 'SET_ACCOUNT') {
        return {
            ...state,
            data: action.payload
        }
    }
    return state
}
