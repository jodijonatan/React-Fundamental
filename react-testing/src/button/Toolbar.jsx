export default function Toolbar ({onClick}) {
    return (
        <div onClick={onClick}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Secound</button>
        </div>
    )
} 