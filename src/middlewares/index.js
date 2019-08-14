import {ADD_ARTICLE} from '../action/constants';
import {DATA_LOADED} from '../action/constants';

const forbiddenWords = ['spam', 'money'];

export const forbidden = ({dispatch}) => {
 return (next) => {
    return (action) => {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word => {
          return action.payload.value.includes(word);
        })
        if (foundWord.length) {
          return dispatch({ type: 'FOUND_BAD_WORD'})
        }
      }
      return next(action);
    }
  }
}


export const getData =  () => {
  return async(dispatch) => {
    try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    return dispatch({type: DATA_LOADED, payload: json});
    } catch (error) {
      return dispatch({type: DATA_LOADED, payload: 'Error'})
    }
  }
}
