import React from "react"
import { COMPLETE, DEL, UNCOMPLETE } from "../todoActions";
import { useDispatch } from "../todoContext"

const Todo = ({ text, id, isCompleted }) => {
    const dispatch = useDispatch();
    return (
        <li>
            <span>{text}</span>
            <span
                role="img"
                aria-label="delete"
                onClick={() => dispatch({ type: DEL, payload: id })}
            >❌</span>
            <span
                role="img"
                aria-label="check"
                onClick={() => dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })}>{isCompleted ? "❗" : "✅"}</span>
        </li>
    )
}
export default Todo