import  { userSignUp, SIGNUP, userSignUpActionTypes } from '../Actions/userSignup/signUpTypes'

const initialState: any = {
    user: null,
    isLogged: false,
} 

const signUpReducer = (state = initialState, action: userSignUpActionTypes) => {
    switch (action.type) {
        case SIGNUP:
            return {...state, user: action.payload, isLogged: true};
        default: 
            return state
    }
}


export default signUpReducer