export interface Todo{
    id:number;
    todo:string;
    isDone: boolean;
}


// User Reducer App
// type Actions = 
//     | {type: "add", payload: string}
//     | {type: "remove", payload:number}
//     | {type: "delete", payload: number}

// const TodoReducer = (state: Todo[], action: Actions) =>{
//     switch (action.type){
//         case "add":
//             return [
//                 ...state,
//                 {id: Date.now(), todo: action.payload, isDone: false}
//             ]
//         case "remove":
//             return state.filter((todo)=> todo.id !== action.payload)
//         case "delete":
//             return state.map((todo)=> todo.id !== action.payload ? {
//                 ...todo, isDone : !todo
//             }:todo);
//         default:
//             return state;

//     }
// };

// import { useReducer } from "react";

// const ReducerExample = () =>{
//     const [state, dispatch] =  useReducer(TodoReducer, []);
//     return <div/>
// }