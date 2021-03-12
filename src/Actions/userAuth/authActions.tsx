import { user, LOGIN, LOGOUT, userActionTypes} from './authType'

export function logIn(user: user): userActionTypes {
    return {
      type: LOGIN,
      payload: user
    }
}

export function logOut(user: user): userActionTypes {
    return {
      type: LOGOUT,
    }
}

