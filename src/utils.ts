import { Visibility, Weather } from './enum'
import { NewDiaryEntry } from './types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  // return ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(param) // Es una forma, pero no es la mejor manera, repites codigo el "contrato", cuando usas a Weather tipo TYPE
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const parseComment = (commetFromRequest: any): string => {
  if (!isString(commetFromRequest)) {
    throw new Error('Invalid or missing commet from request')
  }
  return commetFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Invalid or missing date from request')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Invalid or missing weather from request')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Invalid or missing visibility from request')
  }
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
