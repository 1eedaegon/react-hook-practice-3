import { useReducer, useState } from "react";
import todoReducer, { ADD, COMPLETE, DEL, initState, UNCOMPLETE } from "./todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState)
  const [newTodo, setNewTodo] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD, payload: newTodo })
    setNewTodo("")
  }
  const onChange = (event) => {
    const { target: { value } } = event;
    setNewTodo(value)
  }
  return (
    <div className="App">
      <h1>Add a Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newTodo}
          type='text'
          placeholder="Write to todo"
          onChange={onChange}
        />
      </form>
      <h2>Todos</h2>
      <ul>
        {state.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => dispatch({ type: DEL, payload: todo.id })}>❌</button>
              <button onClick={() => dispatch({ type: COMPLETE, payload: todo.id })}>✅</button>
            </li>
          )
        })}
      </ul>
      {state.completed.length >= 0 && state.completed.map((todo) => {
        return (
          <>
            <h2>Completed</h2>
            <ul>
              <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={() => dispatch({ type: DEL, payload: todo.id })}>❌</button>
                <button onClick={() => dispatch({ type: UNCOMPLETE, payload: todo.id })}> ❗ </button>
              </li>

            </ul>
          </>
        )
      })}
    </div>
  );
}

export default App;
