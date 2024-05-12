import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    crossed: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{ 
        state.todos.push(action.payload)
        },
        crossTodo: (state, action)=>{
            const removed = [action.payload];
            state.todos=state.todos.filter((todo)=>
            todo.title!==removed[0].title
            )
            state.crossed.push(action.payload);
         },
        removeTodo: (state, action)=>{
            const removed = [action.payload]; 
            state.todos=state.todos.filter((todo)=>
            todo.title!==removed[0].title
        )
        },
        updateTodo: (state, action)=>{
            const removed = [action.payload]; 
            state.todos=state.todos.filter((todo)=>
            todo.title!==removed[0].title
        )
        },
        clearHistory: (state, action)=>{
            state.crossed=[];
        
        }


    
    } 
})

export const {addTodo, crossTodo, removeTodo, updateTodo, clearHistory} = todoSlice.actions;
export const selectTodoList =(state)=> state.todo.todos;
export const selectCrossedList = (state)=>state.todo.crossed;
export default todoSlice.reducer // exporting it as a default separately in order to wired up with store