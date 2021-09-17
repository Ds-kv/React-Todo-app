import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './Components/form';
import TodoList from './Components/TodoList';


function App() {
   const [inputText, setInputText] = useState("");
   const [todos, setTodos]= useState([]);
 
   useEffect(() => {
     getLocalTodos();
   }, []);

   useEffect(() => {
     saveLocalTodos();
     return () => {}
   }, [todos])

   const saveLocalTodos =()=>{
      localStorage.setItem('todos', JSON.stringify(todos))
   };

   const getLocalTodos=()=>{
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
     let TodoLocal = localStorage.getItem("todos", JSON.stringify(todos));
     setTodos(JSON.parse(TodoLocal))
    }
   }


  return (
    <div className="App">
      <header>
         Todo
      </header>
      <Form  inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} inputText={ inputText } setTodos={setTodos} />
      </div>
   
  );
}

export default App;
