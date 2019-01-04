import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, isDeleted, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: isDeleted === 'N' ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo