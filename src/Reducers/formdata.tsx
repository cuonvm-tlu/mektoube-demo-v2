import { formData, ADD_NAME, ADD_PASSWORD, ADD_EMAIL, ADD_BIRTHDAY,  ADD_GENDER, ADD_ORIGIN, ADD_GEOID, formDataActionTypes, ADD_DAY , ADD_MONTH , ADD_YEAR , ADD_COUNTRY , ADD_REGION , ADD_CITY} from '../Actions/formData/formDataTypes'

const initialState: formData = {
    firstname: '',
	email: '',
	password: '',
	Birthday: '',
	gender: 0,
	origin: 6,
    geoname_id: '',
    day: '',
    month: '',
    year: '',
    country: '',
    city: '',
    region: ''
  }
  
const formDataReducer = (state = initialState, action: formDataActionTypes) => {
    switch (action.type) {
        case ADD_NAME:
            return {...state, firstname: action.payload};
        case ADD_PASSWORD:
            return {...state, password: action.payload};
        case ADD_EMAIL:
            return {...state, email: action.payload};
        case ADD_BIRTHDAY:
            return {...state, Birthday: action.payload};
        case ADD_GENDER:
            return {...state, gender: action.payload};
        case ADD_ORIGIN:
            return {...state, origin: action.payload};
        case ADD_GEOID: 
            return {...state, geoname_id: action.payload};
        case ADD_DAY: 
            return {...state, day: action.payload};
        case ADD_MONTH: 
            return {...state, month: action.payload};
        case ADD_YEAR: 
            return {...state, year: action.payload};
        case ADD_COUNTRY: 
            return {...state, country: action.payload};
        case ADD_REGION: 
            return {...state, region: action.payload};
        case ADD_CITY: 
            return {...state, city: action.payload};
        default:
            return state;
    }
}
  
export default formDataReducer