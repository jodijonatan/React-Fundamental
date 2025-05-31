import { useState } from "react";

export default function Counter () {
    let [counter, setCounter] = useState(0)

    function handleClick () {
        setCounter(counter + 1)
        console.log(counter)
    }

    return (
        <div className="pt-6">
            <button onClick={handleClick} className="pl-2 text-xl text-white bg-black px-2 py-1 rounded-full ml-2">Counter button</button>
            <h1 className="text-xl text-white pt-1 font-semibold">Counter : {counter}</h1>
        </div>
    )
}