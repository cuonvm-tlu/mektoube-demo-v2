import { ADD_COUNTRIES, ADD_REGIONS , ADD_CITIES, LocationActionTypes, Location } from '../Actions/location/locationTypes'

const initialState: Location = {
    countries: [],
    regions: [],
    cities: []
  }
  
const locationReducer = (state = initialState, action: LocationActionTypes) => {
    switch (action.type) {
        case ADD_COUNTRIES:
            return {...state, countries: action.payload};
        case ADD_REGIONS:
            return {...state, regions: action.payload};
        case ADD_CITIES:
            return {...state, cities: action.payload};
        default:
            return state;
    }
}
  
export default locationReducer