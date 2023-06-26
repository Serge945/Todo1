import { useState } from "react"

function Todoform({addTodo}) {
    const [value, setValue]= useState('')
    const handleSubmit = (e)=>{
       e.preventDefault()
       addTodo(value)
       setValue('')
    }
  return (
    <form className="TodoForm" onSubmit ={handleSubmit}>
<input 
   type="text" className="todo-input"
   placeholder="what is the task today"
   onChange ={(e) =>setValue(e.target.value)}
   value={value}/>
   <button type='submit' className="todo-btn">Add Task</button> 
    </form>
  )
}

export default Todoform
/*on doit garder ce que l'utilisateur importe et poour cela on doit faire un useState
on doit add une fonction qui capture la valeur du state car d'autres composants doivent acceder au state aussi ; 






*/