import React from 'react'
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ text:string; remove:() => void }> = (props) => {
  return (
    <>
      <li onClick={props.remove} className={classes.item}>{props.text}</li>
    </>
  )
}

export default TodoItem
