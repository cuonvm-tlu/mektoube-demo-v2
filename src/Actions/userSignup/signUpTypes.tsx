export interface userSignUp {
    uuid: string;
    token: string;
    puk: string;
}

export const SIGNUP = 'SIGNUP'

  
interface SIGNUP {
    type: typeof SIGNUP, 
    payload: userSignUp
}

export type userSignUpActionTypes = SIGNUP 