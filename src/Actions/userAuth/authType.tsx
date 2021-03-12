export interface user {
    email: string;
    uuid: string;
}

export const LOGIN = 'LOGGIN'
export const LOGOUT = 'LOGOUT'

interface LOGIN {
    type: typeof LOGIN,
    payload: user
}
  
interface LOGOUT {
    type: typeof LOGOUT
}

export type userActionTypes = LOGIN | LOGOUT 