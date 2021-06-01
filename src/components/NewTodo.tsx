import React, { useRef, useContext } from 'react'
import { TodosContext } from '../store/todos-context'
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {

  const todosCtx = useContext(TodosContext)

  const inputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    let enteredText = inputRef.current!.value

    if (enteredText?.trim().length === 0){
      return
    }

  
    todosCtx.addTodo(enteredText)

    inputRef.current!.value = ''

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input ref={inputRef} type="text" id='text' />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
