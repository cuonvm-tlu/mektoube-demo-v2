import notiReducer from './noti'
import { combineReducers } from 'redux'
import formDataReducer from './formdata'
import authReducer from './userAuth'
import signUpReducer from './userSignup'
import locationReducer from './location'

const rootReducer = combineReducers({
    noti: notiReducer,
    formdata: formDataReducer,
    auth: authReducer,
    signUp: signUpReducer,
    location: locationReducer
})

export default rootReducer;