import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo, toggleTodo} from "../../store-reduxToolkit/reducers/todo";

const Todolist = () => {
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() === "") return;
    const newTodo = { id: Date.now(), text: task, completed: false };
    dispatch(addTodo(newTodo));
    setTask("");
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (todo) => {
    setTask(todo.text);
    setEditId(todo.id);
  };

  const handleUpdate = () => {
    if (task.trim() === "") return;
    dispatch(updateTodo({ id: editId, text: task, completed: false }));
    setTask("");
    setEditId(null);
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      
      {/* Input Box */}
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-grow rounded-md"
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {editId ? (
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
        ) : (
          <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded-md">Add</button>
        )}
      </div>

      {/* Todo List */}
      <ul className="space-y-2">
        {todoList?.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
            <span 
              className={`flex-grow ${todo.completed ? "line-through text-gray-500" : ""}`}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(todo)} className="bg-yellow-500 text-white px-3 py-1 rounded-md">Edit</button>
              <button onClick={() => handleDelete(todo.id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
