import React from 'react'

function Item({todo}) {
  return (
    <div> 
     <li key={todo.id} className={todo.completed ? "completed" : ""}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={todo.completed}/>
      <label>{todo.text}</label>
      <button className="destroy"></button>
    </div>
  </li></div>
  )
}

export default Item