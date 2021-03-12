import { formData, ADD_NAME, ADD_PASSWORD, ADD_EMAIL, ADD_BIRTHDAY,  ADD_GENDER, ADD_ORIGIN, formDataActionTypes, ADD_GEOID, ADD_DAY , ADD_MONTH , ADD_YEAR, ADD_COUNTRY , ADD_REGION , ADD_CITY} from './formDataTypes'


export function addName(name: string): formDataActionTypes {
  return {
    type: ADD_NAME,
    payload: name
  }
}

export function addPassword(password: string): formDataActionTypes {
    return {
      type: ADD_PASSWORD,
      payload: password
    }
}

export function addEmail(email: string): formDataActionTypes {
    return {
      type: ADD_EMAIL,
      payload: email
    }
}

export function addBirthday(birthday: string): formDataActionTypes {
    return {
      type: ADD_BIRTHDAY,
      payload: birthday
    }
}

export function addGender(gender: number): formDataActionTypes {
    return {
      type: ADD_GENDER,
      payload: gender
    }
}

export function addOrigin(origin: number): formDataActionTypes {
    return {
      type: ADD_ORIGIN,
      payload: origin
    }
}

export function addGeoId(geoid: string): formDataActionTypes {
  return {
    type: ADD_GEOID,
    payload: geoid
  }
}

export function addDay(day: string): formDataActionTypes {
  return {
    type: ADD_DAY,
    payload: day
  }
}

export function addYear(year: string): formDataActionTypes {
  return {
    type: ADD_YEAR,
    payload: year
  }
}

export function addMonth(month: string): formDataActionTypes {
  return {
    type: ADD_MONTH,
    payload: month
  }
}

export function addCountry(country: string): formDataActionTypes {
  return {
    type: ADD_COUNTRY,
    payload: country
  }
}

export function addRegion(region: string): formDataActionTypes {
  return {
    type: ADD_REGION,
    payload: region
  }
}

export function addCity(city: string): formDataActionTypes {
  return {
    type: ADD_CITY,
    payload: city
  }
}


