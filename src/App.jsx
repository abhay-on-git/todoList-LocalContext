import { useState } from 'react'
import {TodoContextProvider} from './contexts'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prevTodo)=>[{id : Date.now() , ...todo},...prevTodo])
  }

  const updatedTodo = (id,todo)=>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>prevTodos.filter((prevTodo)=>(prevTodo.id !== id)))
  }

  const toggleComplete = (id)=>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo,completed :!prevTodo.completed} : prevTodo)))
  }

  return (
    <TodoContextProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App