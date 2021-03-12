import  { user, LOGIN, LOGOUT, userActionTypes} from '../Actions/userAuth/authType'

const initialState: any = {
    user: null,
    isLogged: false,
} 

const authReducer = (state = initialState, action: userActionTypes) => {
    switch (action.type) {
        case LOGIN:
            return {...state, user: action.payload, isLogged: true};
        case LOGOUT:
            return {...state, user: null, isLogged: false};
        default: 
            return state
    }
}


export default authReducer