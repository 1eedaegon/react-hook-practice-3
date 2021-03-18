import React, { useState } from "react"
import { ADD } from "../todoActions";
import { useDispatch } from "../todoContext"

const Add = () => {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();
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
        <>
            <form onSubmit={onSubmit}>
                <input
                    value={newTodo}
                    type='text'
                    placeholder="Write to todo"
                    onChange={onChange}
                />
            </form>
        </>
    )
}
export default Add;