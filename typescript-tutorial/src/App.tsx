import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

// let name:string;
// let age:number | string;
// let isStudent:boolean;
// let hobbies: string[];
// let any: any; // not recomended
// let personName:  unknown;


// // this is a tuple type
// let roles: [number, string];
// // definir objetos
// type Person ={
//   name: string;
//   age?: number;
// }
// let person: Person ={
//   name: "Hou"
// }
// // arrays de objetos 
// let lostOfPeole: Person[];

// function printName(name:string){
// console.log(name)
// }

// let printNames:(name:String) => void; // void retorna undefined y never no retorna nada
//  type x = {
//   a:string;
//   b:number;
//  }
//   type y = x &{
//     c:string;
//     d:string;
//   }

//   interface Persona{
//     nombre: string;
//     age: number;
//   }

//   interface Personita extends Persona{
//     profesion: string;
//   }


const App: React.FC = () => {

  const[todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo: todo, isDone: false}])
      setTodo("");
    }
    
  }

  console.log(todos)
  return (
    <div className="App">
    <span className="heading">Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
