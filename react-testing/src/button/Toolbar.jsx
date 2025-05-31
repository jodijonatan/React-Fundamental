export default function Toolbar ({onClick}) {
    return (
        <div onClick={onClick} className="pt-6 bg-sky-300">
            <button className="bg-white border-1 mr-0.5" onClick={onClick}>First</button>
            <button className="bg-white border-1" onClick={onClick}>Secound</button>
        </div>
    )
} 