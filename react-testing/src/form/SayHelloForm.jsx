export default function SayHelloForm () {
    function handleClick (e) {
        e.preventDefault()
        const name = document.getElementById("input_name").value
        document.getElementById("text_hello").innerHTML = `Hello, ${name}!`
    }

    return (
        <div className="pt-6"> 
            <form>
                <input id="input_name" className="bg-white outline-none rounded-full px-2 py-1"/>
                <button onClick={handleClick} className="pl-2 text-xl text-white bg-black px-2 py-1 rounded-full ml-2">Say hello</button>
            </form>
            <h1 id="text_hello" className="text-xl text-white pt-1 font-semibold">Hello, User!</h1>
        </div>
    )
}