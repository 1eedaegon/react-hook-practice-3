import React, { createContext, useContext, useReducer } from "react";
import todoReducer, { initState } from "./todoReducer";

const TodosContext = createContext();
const TodosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initState)
    return (
        <TodosContext.Provider value={{ state, dispatch }}>
            {children}
        </TodosContext.Provider>
    )
}
export const useDispatch = () => {
    const { dispatch } = useContext(TodosContext);
    return dispatch;
}
export const useTodoState = () => {
    const { state } = useContext(TodosContext)
    console.log(state)
    return state
}
export default TodosContextProvider;