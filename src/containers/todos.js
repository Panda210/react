import { connect } from 'react-redux';
import * as actions from '../actions/index';
import TodoList from '../components/TodoList';



const mapStateToProps = state => ({
  todos: state.todos ? state.todos : [{id :1 ,text: '测试第1个数据', isDeleted: 'N'},{id :2 ,text: '测试第2个数据', isDeleted: 'N'}]
})

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(actions.addAction()),
  query: () => dispatch(actions.queryAction()),
  del: id => dispatch(actions.delAction(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)