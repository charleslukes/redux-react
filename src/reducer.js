import { ADD_ARTICLE } from "./action/constants";

const initialState = {
  articles: [],
}

export const rootReducer = (state = initialState, action) => {
  if(action.type === ADD_ARTICLE){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }
  return state;
}

