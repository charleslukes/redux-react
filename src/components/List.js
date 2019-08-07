import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {articles: state.articles};
}

const ConnectedList = ({articles}) => (
   <ul className='list-group list-group-flush'>
     {articles.map(elem => (
       <li className='list-group-item' key={elem.id}>
         {elem.value}
       </li>
     ))}
   </ul>
)

const List = connect(mapStateToProps)(ConnectedList);

export default List;

