import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/input";
import TodoList from "./components/list";


function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== "")
      setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    const newListTodo = listTodo.filter((_, index) => index !== key);
    setListTodo(newListTodo);
  };

  const editListItem = (key, newText) => {
    const newListTodo = [...listTodo];
    newListTodo[key] = newText;
    setListTodo(newListTodo);
  };

  return (
    <div className="main-container">
      <div className="center-container"></div>
      <TodoInput addList={addList} />
      <h1 className="app-heading">TODO</h1>
      {listTodo.map((listItem, i) => (
        <TodoList
          key={i}
          index={i}
          item={listItem}
          deleteItem={deleteListItem}
          editItem={editListItem}
        />
      ))}

    </div>
  );
}

export default App;