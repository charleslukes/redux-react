import {ADD_ARTICLE} from '../action/constants';

const forbiddenWords = ['spam', 'money'];

export const forbidden = ({dispatch}) => {
 return (next) => {
    return (action) => {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word => {
          return action.payload.title.includes(word);
        })
        if (foundWord) {
          return dispatch({ type: 'FOUND BAD WORD'})
        }
      }
      return next(action);
    }
  }
}