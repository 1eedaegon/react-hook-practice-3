import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import TodosContextProvider from "./todoContext";
ReactDOM.render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>,
  document.getElementById('root')
);
