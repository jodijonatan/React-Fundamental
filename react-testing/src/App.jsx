import { useState } from "react";
import './App.css'
import TodoList from "./todolist/TodoList";
import Table from "./table/Table";
import AlertButton from "./button/AlertButton";
import MyButton from "./button/MyButton";
import Toolbar from "./button/Toolbar";

function SayHello ({text = 'Anontmous'}) {
  return (
    <h2 className="text-sky-700 font-bold text-2xl">Hello, {text}, <span className="text-black font-normal text-md">nice to meet you!</span></h2>
  )
}

export default function App () {
  const author = "Jodi Jonatan Karo karo"
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[url(assets/background.jpg)] bg-cover text-center pt-16">
      <h2 className="font-bold text-xl">Hello, World!</h2>
      <p>Belajar React Dasar ✌️</p>
      <h2>{author.toUpperCase()}</h2>
      <button className="bg-sky-200 py-1 px-2 rounded-full cursor-pointer" onClick={() => setCount((count) => count + 1)}>
        Like {count}
      </button>
      <SayHello text={author} />
      <TodoList />
      <Table />
      <AlertButton text="Click Me" message="Tombol telah diklik"/> <br/>
      <MyButton text="Smash Me" onSmash={() => alert("Smash berhasil")}/> <br/>
      <MyButton text="Hit me" onSmash={() => alert("Hit berhasil")}/>
      <Toolbar onClick={(e) => {
        e.stopPropagation()
        alert("You have clicked on the toolbar")
      }}/>
    </div>
  )
}