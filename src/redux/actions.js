export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  payload: id,
});

export const updateTodo = (todo) => ({
  type: "UPDATE_TODO",
  payload: todo,
});

export const setTodos = (todos) => ({
  type: "SET_TODOS",
  payload: todos,
});
