import { Visibility, Weather } from './enum'
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy' // Para este tipo es mejor usar un enum
// export type Visbility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// ? Indicar  un tipo similar pero sin algunos atributos
// export type NonSensitieveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitieveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
