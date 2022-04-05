import { combineReducers, createStore } from 'redux'
import tokenReducer from '../features/loginUser'
import profileReducer from '../features/userProfile'
import accountReducer from '../features/account'


// on utilise combineReducer pour faire
// fonctionner plusieurs reducers ensemble
const reducer = combineReducers({
    token: tokenReducer,
    profile: profileReducer,
    account: accountReducer
})

// Pour connecter les Redux Devtools on utilise
// un fonction disponible sur l'objet window
// Si cette fonction existe on l'exécute.
const reduxDevtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// on utilise le résultat de cette fonction en parametre de createStore
const store = createStore(reducer, reduxDevtools)

export default store
