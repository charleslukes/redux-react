import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addArticles } from '../action/actions';
import uuidv1 from "uuid";

const mapDispatchToProps = (dispatch) => {
  return {
    addArticles: article => dispatch(addArticles(article))
  }
}

const ConnectedForm = (props) => {

  const [title, setTitle] = useState({title: ''});

  const handleChange = (e) => {
    setTitle({[e.target.id]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv1();
    const value = title.title;
    props.addArticles({ value, id });
    setTitle({title: ''});
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
      <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title.title}
            onChange={handleChange}
          />
      </div>
      <button type="submit" className="btn btn-success btn-lg">
        SAVE
      </button>
    </form>
  )
}


const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form;
