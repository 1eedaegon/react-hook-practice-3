import { useReducer, useState } from "react";

const ADD = "add";
const initState = {
  todos: []
}
const todoReducer = (state, actions) => {
  switch (actions.type) {
    case ADD:
      return { todos: [...state.todos, { text: actions.paylaod }] }
    default:
      return new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState)
  const [newTodo, setNewTodo] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD, paylaod: newTodo })
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
        {state.todos.map((todo, idx) => {
          return <li key={idx}>{todo.text}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
