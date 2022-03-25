import produce from 'immer'
import { selectToken } from '../utils/selectors'

// Le state initial de la feature token
const initialState = {
    // le statut permet de suivre l'état de la requête
    status: 'void',
    // les données lorsque la requête a fonctionné
    data: null,
    // l'erreur lorsque la requête échoue
    error: null,
}
// Les noms des actions
const FETCHING = 'token/fetching'
const RESOLVED = 'token/resolved'
const REJECTED = 'token/rejected'
const LOGOUT = 'token/logout'
// la requête est en cours
const tokenFetching = () => ({ type: FETCHING })
// la requête a fonctionné
const tokenResolved = (data) => ({ type: RESOLVED, payload: data })
// la requête a échoué
const tokenRejected = (error) => ({ type: REJECTED, payload: error })

// cette fonction est une action asynchrone
// elle attend le store redux en paramètre
export async function fetchOrUpdatetoken(store, emailUser, passwdUser) {
    // on peut lire le state actuel avec store.getState()
    const status = selectToken(store.getState()).status
    // si la requête est déjà en cours
    if (status === 'pending' || status === 'updating') {
        // on stop la fonction pour éviter de récupérer plusieurs fois la même donnée
        return
    }
    // On peut modifier le state en envoyant des actions avec store.dispatch()
    // ici on indique que la requête est en cours
    store.dispatch(tokenFetching())
    try {
        // on utilise fetch pour faire la requête
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                email: emailUser,
                password: passwdUser,
            }),
        })
        const data = await response.json()
        // si la requête fonctionne, on envoie les données à redux avec l'action resolved
        store.dispatch(tokenResolved(data))
    } catch (error) {
        // en cas d'erreur on informe le store avec l'action rejected
        store.dispatch(tokenRejected(error))
    }
}

export default function tokenReducer(state = initialState, action) {
    // on utilise immer pour changer le state
    return produce(state, (draft) => {
        // on fait un switch sur le type de l'action
        switch (action.type) {
            // si l'action est de type FETCHING
            case FETCHING: {
                // si le statut est void
                if (draft.status === 'void') {
                    // on passe en pending
                    draft.status = 'pending'
                    return
                }
                // si le statut est rejected
                if (draft.status === 'rejected') {
                    // on supprime l'erreur et on passe en pending
                    draft.error = null
                    draft.status = 'pending'
                    return
                }
                // si le statut est resolved
                if (draft.status === 'resolved') {
                    // on passe en updating (requête en cours mais des données sont déjà présentent)
                    draft.status = 'updating'
                    return
                }
                // sinon l'action est ignorée
                return
            }
            // si l'action est de type RESOLVED
            case RESOLVED: {
                // si la requête est en cours
                if (draft.status === 'pending' || draft.status === 'updating') {
                    // on passe en resolved et on sauvegarde les données
                    draft.data = action.payload
                    draft.status = 'resolved'
                    return
                }
                // sinon l'action est ignorée
                return
            }
            // si l'action est de type REJECTED
            case REJECTED: {
                // si la requête est en cours
                if (draft.status === 'pending' || draft.status === 'updating') {
                    // on passe en rejected, on sauvegarde l'erreur et on supprime les données
                    draft.error = action.payload
                    draft.status = 'rejected'
                    draft.data = null
                    return
                }
                // sinon l'action est ignorée
                return
            }
            // si l'action est de type LOGOUT
            case LOGOUT: {
                return state = initialState
            }
            // Sinon (action invalide ou initialisation)
            default:
                // on ne fait rien (retourne le state sans modifications)
                return
        }
    })
}
