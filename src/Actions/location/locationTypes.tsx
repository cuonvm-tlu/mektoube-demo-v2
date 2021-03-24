export interface Location {
    countries: string[],
    regions: string[],
    cities: string[]
  }
  
  export const ADD_COUNTRIES = 'ADD_COUNTRIES'
  export const ADD_REGIONS = 'ADD_REGIONS'
  export const ADD_CITIES = 'ADD_CITIES'
  
  interface ADD_COUNTRIES {
    type: typeof ADD_COUNTRIES,
    payload: string[]
  }

  interface ADD_REGIONS {
    type: typeof ADD_REGIONS,
    payload: string[]
  }

  interface ADD_CITIES {
    type: typeof ADD_CITIES,
    payload: string[]
  }
  
  
  export type LocationActionTypes = ADD_COUNTRIES | ADD_REGIONS | ADD_CITIES