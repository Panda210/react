import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, del, add, query }) => (
  <div>
    <div>
      <ul>
        {todos.map(todo => (
          <Todo 
            key={todo.id} {...todo} 
            del={() => del(todo.id)}
            add={() => add()}
          />
        ))}
      </ul>
    </div>
    <div>
      <button onClick={query}>查询</button>
    </div>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isDeleted: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  del: PropTypes.func.isRequired,
  query: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired
}

export default TodoList