//Added action
// In `VisibleTodoList`, use action creators instead of custom
//`mapDispatchToProps` as the second argument to `connect`.

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});