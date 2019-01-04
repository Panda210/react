import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ add, del, id, isDeleted, text }) => (
  <div>
    <div>
    <li
      style={{
        textDecoration: isDeleted === 'Y' ? 'line-through' : 'none'
      }}
    >
      {text}
      <button onClick={add}>添加</button>
      <button onClick={del}>删除</button>
    </li>
    </div>
  </div>
)

Todo.propTypes = {
  add: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isDeleted: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo