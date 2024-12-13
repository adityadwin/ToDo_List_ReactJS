/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCheck, removeTodo, editTodo }) => (
  <div>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleCheck={toggleCheck}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    ))}
  </div>
);

export default TodoList;
