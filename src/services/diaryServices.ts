import { DiaryEntry, NewDiaryEntry, NonSensitieveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

// ? Insercion de los tipos, indicar a typeScript para que funcione de cierta form... Evitar debes en cuando...
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getDiaries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitieveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const findById = (id: number): NonSensitieveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...rest } = entry
    return rest
  }

  return undefined
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
