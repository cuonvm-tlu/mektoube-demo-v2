import { ADD_COUNTRIES , ADD_REGIONS , ADD_CITIES, LocationActionTypes } from './locationTypes'


export function addCountries(countries: string[]): LocationActionTypes {
  return {
    type: ADD_COUNTRIES,
    payload: countries
  }
}

export function addRegions(regions: string[]): LocationActionTypes {
  return {
    type: ADD_REGIONS,
    payload: regions
  }
}

export function addCities(cities: string[]): LocationActionTypes {
  return {
    type: ADD_CITIES,
    payload: cities
  }
}
