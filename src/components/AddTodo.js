import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todo/todoSlice"

const AddTodo = () => {

const [input, setInput] = useState('');
const [title, setTitle] = useState('');
const [id, setId] = useState(1);
const dispatch = useDispatch();

const addTodoHandler=(e)=>{
    e.preventDefault()
    const todoData = {id: id,title: title, input:input}
    dispatch(addTodo(todoData))
    setInput('')
    setTitle('')
    const newId = id+1;
    setId(newId);
}

  return (
    <div>
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input type="text" placeholder="Enter Title" className="border-2 rounded-md" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <input type="text" className="border-2 rounded-md md:w-[30%]"
            placeholder="Enter a Todo"
            value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit"
            className="text-white bg-indigo-500 border-0 py-1 px-6 hover:bg-indigo-600 rounded text-md">  AddTodo</button>
      </form>
    </div>
  )
}

export default AddTodo
