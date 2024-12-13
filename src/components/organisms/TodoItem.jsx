/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "../elements/Checkbox";
import Button from "../elements/Button";
import Input from "../elements/Input";

const TodoItem = ({ todo, toggleCheck, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleSave = () => {
    if (newText.trim()) {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md mb-4">
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleCheck(todo.id)}
      />
      {isEditing ? (
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-grow"
        />
      ) : (
        <span
          className={`flex-grow ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <Button
              label="Save"
              onClick={handleSave}
              className="bg-pantone-blue-dark"
            />
            <Button
              label="Cancel"
              onClick={handleEditToggle}
              className="bg-gray-500"
            />
          </>
        ) : (
          <>
            <Button
              label="Edit"
              onClick={handleEditToggle}
              className="bg-pantone-blue-dark"
            />
            <Button
              label="Delete"
              onClick={() => removeTodo(todo.id)}
              className="bg-red-500"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
