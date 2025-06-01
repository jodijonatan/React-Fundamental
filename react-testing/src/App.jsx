import { useState } from "react";
import './App.css'
import TodoList from "./todolist/TodoList";
import Table from "./table/Table";
import AlertButton from "./button/AlertButton";
import MyButton from "./button/MyButton";
import Toolbar from "./button/Toolbar";
import SearchForm from "./form/SearchForm";
import SayHelloForm from "./form/SayHelloForm";
import Counter from "./form/Counter";

function SayHello ({text = 'Anontmous'}) {
  return (
    <h2 className="text-sky-700 font-bold text-2xl">Hello vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv, {text}, <span className="text-black font-normal text-md">nice to meet you!</span></h2>
  )
}

export default function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-600 text-center py-16">
      <h2 className="font-bold text-xl">Hello, World!</h2>
      <p>Belajar React Dasar ✌️</p>
      <button className="bg-sky-200 py-1 w-16 rounded-full cursor-pointer" onClick={() => setCount((count) => count + 1)}>
        Like {count}
      </button>
      <TodoList />
      <Table />
      <AlertButton text="Click Me" message="Tombol telah diklik"/> <br/>
      <MyButton text="Smash Me" onSmash={() => alert("Smash berhasil")}/> <br/>
      <MyButton text="Hit me" onSmash={() => alert("Hit berhasil")}/>
      <Toolbar onClick={(e) => {
        e.stopPropagation()
        alert("You have clicked on the toolbar")
      }}/>
      <SearchForm />
      <SayHelloForm />
      <Counter />
    </div>
  )
}