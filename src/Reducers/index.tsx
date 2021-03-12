import notiReducer from './noti'
import { combineReducers } from 'redux'
import formDataReducer from './formdata'
import authReducer from './userAuth'
import signUpReducer from './userSignup'

const rootReducer = combineReducers({
    noti: notiReducer,
    formdata: formDataReducer,
    auth: authReducer,
    signUp: signUpReducer
})

export default rootReducer;