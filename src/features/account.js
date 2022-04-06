// Un state est initialiser lors du clique sur l'un des comptes, pour récupérer ces informations
// lors de l'affichage des transactions du compte qui a été cliqué.
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
