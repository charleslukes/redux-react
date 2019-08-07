import {ADD_ARTICLE} from './constants'

export const addArticles = (payload) => {
  return {
    task: ADD_ARTICLE,
    payload
  }
}