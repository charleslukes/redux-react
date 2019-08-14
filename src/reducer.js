import { ADD_ARTICLE } from "./action/constants";
import { FOUND_BAD_WORD } from "./action/constants";
import { DATA_LOADED } from "./action/constants";

const initialState = {
  articles: [],
  remoteArticles: []
}

export const rootReducer = (state = initialState, action) => {
  if(action.type === ADD_ARTICLE){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }
  if(action.type === FOUND_BAD_WORD){
    return Object.assign({}, state, {
      articles: state.articles.concat({value: 'bad word'})
    })
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
}

