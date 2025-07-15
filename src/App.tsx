import './styles/App.css'
import Todo from './todo'
import data from "./data.json"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"

function App() {
  const [todos, setTodos] = useState(data)

  const markAsCompleted = (key: string) => {
    setTodos(prev => prev.map(todo =>
      todo.key === key ? { ...todo, completed: true } : todo
    ))
  }

  const markAsIncomplete = (key: string) => {
    setTodos(prev => prev.map(todo =>
      todo.key === key ? { ...todo, completed: false } : todo
    ))
  }

  const changeTitle = (key: string, newTitle: string) => {
    setTodos(prev => prev.map(todo =>
      todo.key === key ? { ...todo, title: newTitle } : todo
    ))
  }

  const changeDescription = (key: string, newDescription: string) => {
    setTodos(prev => prev.map(todo =>
      todo.key === key ? { ...todo, description: newDescription } : todo
    ))
  }

  return (
    <div className="overflow-auto max-h-screen max-w-screen ">
      <Input className="w-full max-w-2xl mx-auto border-none shadow-lg my-4"/>
      <div className="bg-background grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {todos.map((item) => (
          <Todo
            key={item.key}
            title={item.title}
            description={item.description}
            completed={item.completed}
            createdAt={item.createdAt}
            onMarkCompleted={() => markAsCompleted(item.key)}
            onMarkIncomplete={() => markAsIncomplete(item.key)}
            changeTitle={(newTitle) => changeTitle(item.key, newTitle)}
            changeDescription={(newDescription) => changeDescription(item.key, newDescription)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
