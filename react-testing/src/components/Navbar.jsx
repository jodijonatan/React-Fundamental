export default function Navbar () {
    return (
        <div className="flex justify-between bg-white/40 backdrop-blur-xs fixed w-full top-0 py-3 px-6">
            <h2 className="font-black bg-gradient-to-r from-sky-700 to-sky-300 bg-clip-text text-transparent">JO DEV</h2>
            <ul className="flex gap-6">
                <li className="hover:scale-110 hover:text-sky-500 transition"><a href="#">Home</a></li>
                <li className="hover:scale-110 hover:text-sky-500 transition"><a href="#">About</a></li>
                <li className="hover:scale-110 hover:text-sky-500 transition"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}