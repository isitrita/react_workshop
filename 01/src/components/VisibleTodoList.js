import { connect } from 'react-redux';
// use actions creator instead of custom mapDispatchToProps
import { toggleTodo } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter),
//   };
// };

// Recommendation: Use concise functions where possible (in action creators and `mapStateToProps`).
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

// No to custom mapStateToProps!

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch({
//         type: 'TOGGLE_TODO',
//         id,
//       });
//     },
//   };
// };

const VisibleTodoList = connect(
  mapStateToProps,
  //mapDispatchToProps
  { onTodoClick: toggleTodo }
)(TodoList);

export default VisibleTodoList;
