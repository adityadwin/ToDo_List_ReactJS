import { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import TodoList from "../organisms/TodoList";

const TodoPage = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoText(""); // Reset input field
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-4xl font-bold text-center text-pantone-blue mb-6">
        Todo List
      </h1>
      <div className="flex space-x-4 mb-6">
        <Input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new todo"
          className="flex-grow"
        />
        <Button label="Add Todo" onClick={addTodo} />
      </div>
      <TodoList
        todos={todos}
        toggleCheck={toggleCheck}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoPage;
