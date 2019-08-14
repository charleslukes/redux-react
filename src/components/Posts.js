import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getData} from '../middlewares/index'

const Post = ({getData, articles}) => {
  
  useEffect (() => {
    getData();
  }, [getData])

  return (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }
}

export default connect(mapStateToProps, {getData})(Post);
