import React from 'react'
import Task from './todo';


const TodoList = ({todos, setTodos}) => {
    return (
        <div className="td-container">
            <ul className="todo-list">
               {todos.map((todo) => (
                   <Task key={ todos.id } texts={todo.texts} setTodos={setTodos} id={ todo.id } todos={todos} completed={todo.completed} />
               ))}
             </ul>
        </div>
    )
}

export default TodoList;
