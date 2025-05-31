export default function SearchForm () {
    return (
        <form action="" className="pt-6">
            <input className="bg-white outline-none rounded-full px-2 py-1" type="text" />
            <button onClick={(e) => {
                e.preventDefault()
                alert("You search")
            }} className="pl-2 text-xl text-white bg-black px-2 py-1 rounded-full ml-2">Search</button>
        </form>
    )
}