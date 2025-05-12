import { useEffect, useState } from 'react'  
import Header from"./mycomponents/header";
import {AddTodo} from"./mycomponents/AddTodo";
import ErrorBoundary from './ErrorBoundary';
import {Todos} from"./mycomponents/Todos";
import {Footer} from"./mycomponents/Footer";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }
  const handledelete=(todo)=>{
   setTodos(todos.filter((e)=>{
return e!==todo;

   }))
   localStorage.getItem("todos",JSON.stringify(todos))
    }
 const addTodo=(title,desc)=>{
  let slno;
  if(todos.length==0){
    slno=0;
  }else{
   slno=todos[length-1]
  }
  const Mytodo={
    slno:slno,
    title:title,
    desc:desc
  };
  setTodos([...todos,Mytodo]);
 }
 const [todos,setTodos]=useState(initTodo);
 useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
 },[todos])
  return (
    <>
     <ErrorBoundary>
     <Header title="MY TODO LIST"/>
 <AddTodo addTodo={addTodo}/>
 <Todos todos={todos} onDelete={handledelete}/>
   <Footer/>
  </ErrorBoundary>

 
    </> 
  ) 
}

export default App;
