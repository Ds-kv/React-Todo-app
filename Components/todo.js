import React from 'react'

const Task = ({texts, setTodos, todos, id, completed}) => {
    
    const deleteHandler=()=>{
      setTodos(todos.filter((el) => el.id !== id))
    }
    
    const completeHandler=()=>{
     setTodos(todos.map(item => {
         if (item.id === id) {
             return{
                 ...item, completed: !item.completed
             };
         }
         return item;
     })
     )
    }
    return (
        
        <div >
           
            <li className={completed ? "completed todo-item" : "todo-item"} >
                {texts}
                <div>
            <button onClick={deleteHandler} className="Delete">X</button>
                <button onClick={completeHandler} className="Done">✔</button>
                </div>
                </li>
               
           
            
        </div>
        
    )
}

export default Task;
