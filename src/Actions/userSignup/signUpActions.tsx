import { userSignUp, SIGNUP, userSignUpActionTypes} from './signUpTypes'

export function signUp(user: userSignUp): userSignUpActionTypes {
    return {
      type: SIGNUP,
      payload: user
    }
}



