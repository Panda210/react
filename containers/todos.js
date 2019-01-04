import { connect } from 'react-redux';
import * as actions from '../actions/index';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.result)
})

const mapDispatchToProps = dispatch => ({
  delAction: id => dispatch(actions.delAction(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)