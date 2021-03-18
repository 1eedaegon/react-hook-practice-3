import { v4 as uuidv4 } from "uuid"
import { ADD, DEL, COMPLETE, UNCOMPLETE, EDIT } from "./todoActions"

export const initState = {
    todos: [],
    completed: []
}
const todoReducer = (state, actions) => {
    switch (actions.type) {
        case ADD:
            return {
                ...state,
                todos: [...state.todos, { text: actions.payload, id: uuidv4() }]
            }
        case DEL:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== actions.payload),
                completed: state.completed.filter((todo) => todo.id !== actions.payload)
            }
        case COMPLETE:
            const CtoU = state.todos.find(todo => todo.id === actions.payload)
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== actions.payload),
                completed: [...state.completed, { ...CtoU }]
            };
        case UNCOMPLETE:
            const UtoC = state.completed.find(todo => todo.id === actions.payload)
            return {
                ...state,
                completed: state.completed.filter(todo => todo.id !== actions.payload),
                todos: [...state.todos, { ...UtoC }]
            };
        case EDIT:
            return;
        default:
            throw new Error();
    }
}

export default todoReducer;