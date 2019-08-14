import {ADD_ARTICLE} from './constants'

export const addArticles = (payload) => {

  return {
    type: ADD_ARTICLE,
    payload
  }
}


export const getData = () => {

  return { type: 'DATA_REQUESTED'}
}

