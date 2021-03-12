export interface formData {
  firstname: string;
	email: string;
	password: string;
	Birthday: string;
	gender: number;
	origin: number;
  geoname_id: string;
  day: string;
  month: string; 
  year: string;
  country: string; 
  region: string;
  city: string
  }
  
  export const ADD_NAME = 'ADD_NAME'
  export const ADD_EMAIL = 'ADD_EMAIL'
  export const ADD_PASSWORD = 'ADD_PASSWORD'
  export const ADD_BIRTHDAY = 'ADD_BIRTHDAY'
  export const ADD_GENDER = 'ADD_GENDER'
  export const ADD_ORIGIN = 'ADD_ORIGIN'
  export const ADD_GEOID = 'ADD_GEOID'
  export const ADD_DAY = 'ADD_DAY'
  export const ADD_MONTH = 'ADD_MONTH'
  export const ADD_YEAR = 'ADD_YEAR'
  export const ADD_COUNTRY = 'ADD_COUNTRY'
  export const ADD_REGION = 'ADD_REGION'
  export const ADD_CITY = 'ADD_CITY'
  
  interface ADD_NAME {
    type: typeof ADD_NAME,
    payload: string
  }
  
  interface ADD_EMAIL {
    type: typeof ADD_EMAIL
    payload: string
  }

  interface ADD_PASSWORD {
    type: typeof ADD_PASSWORD
    payload: string
  }

  interface ADD_BIRTHDAY {
    type: typeof ADD_BIRTHDAY
    payload: string
  }

  interface ADD_GENDER {
    type: typeof ADD_GENDER
    payload: number
  }

  interface ADD_ORIGIN {
    type: typeof ADD_ORIGIN
    payload: number
  }

  interface ADD_GEOID {
    type: typeof ADD_GEOID
    payload: string
  }

  interface ADD_DAY {
    type: typeof ADD_DAY
    payload: string
  }

  interface ADD_MONTH {
    type: typeof ADD_MONTH
    payload: string
  }

  interface ADD_YEAR {
    type: typeof ADD_YEAR
    payload: string
  }

  interface ADD_COUNTRY {
    type: typeof ADD_COUNTRY
    payload: string
  }

  interface ADD_REGION {
    type: typeof ADD_REGION
    payload: string
  }

  interface ADD_CITY {
    type: typeof ADD_CITY
    payload: string
  }
  
  export type formDataActionTypes = ADD_NAME | ADD_EMAIL | ADD_PASSWORD | ADD_BIRTHDAY | ADD_GENDER | ADD_ORIGIN | ADD_GEOID | ADD_DAY | ADD_MONTH | ADD_YEAR | ADD_COUNTRY | ADD_REGION | ADD_CITY