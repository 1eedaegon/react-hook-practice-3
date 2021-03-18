import React from "react";
import Add from "./components/Add"
import List from "./components/List";
import Todo from "./components/Todo";
import { useTodoState } from "./todoContext";

const App = () => {
  const { todos, completed } = useTodoState();
  return (
    <div className="App">
      <h1>Add a Todo</h1>
      <Add />
      <List name="Todo">
        {todos.map(todo => (
          <Todo key={todo.id} id={todo.id} text={todo.text} isCompleted={false} />
        ))}
      </List>
      {completed.length > 0 && <List name="Complete">
        {completed.map(todo => (
          <Todo key={todo.id} id={todo.id} text={todo.text} isCompleted={true} />
        ))}
      </List>}
    </div>
  );
}

export default App;
