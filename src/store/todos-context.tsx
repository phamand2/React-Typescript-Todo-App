import React, { useState } from 'react'
import Todos from '../components/Todos'
import Todo from '../models/todos'

type TodosContextObj ={
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {
  
  const [todo, setTodo] = useState<Todo[]>([])


  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    
    setTodo([...todo, newTodo])
  }

  const removeTodoHandler = (id: string) => {
    const newTodo = todo.filter(item => item.id !== id)

    setTodo(newTodo)
  }

  const contextValue: TodosContextObj = {
    items: todo,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }


  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>
}

export default TodosContextProvider