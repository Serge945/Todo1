/* eslint-disable no-undef */
import Todoform from './Todoform'
import { useState } from 'react'; 
import  {v5 as uuidv5} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';



function Todowrapper() {
    const [todos, setTodos] = useState([])
const addTodo = (todo,id)=>{
    const namespace = uuidv5('example.com', uuidv5.DNS);

    setTodos([...todos,{id: uuidv5(todo,namespace),task:todo,completed:false, isEditing:false}])
}
const toggleComplete = id=>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))}

const deleteTodo = id =>{
    setTodos(todos.filter(todo => todo.id !==todo))
} 
const editTodo = id => {
    setTodos(todos.map(todo => todo.id=== id? {...todo, isEditing: !todo.isEditing }:todo))
}
const editTask = (task,id) => {
setTodos(todos.map(todo =>todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))}

  return (
    <div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <Todoform addTodo ={addTodo}/>
        {todos.map((todo, index) => (
          todo.isEditing ? (
          <EditTodoForm editTodo={editTask} 
          task ={todo}/>
            ) : (
                <Todo task ={todo} key={index}
                    toggleComplete={toggleComplete}
                    deleteTodo = {deleteTodo}
                    editTodo={editTodo}/>
            )

            ))}
            
                    
    </div>
  )
}

export default Todowrapper
