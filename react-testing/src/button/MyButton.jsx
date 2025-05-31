export default function MyButton ({text, onSmash}) {
    return (
        <button className="bg-sky-200 rounded-full px-2 py-1 mt-6 cursor-pointer" onClick={onSmash}>{text}</button>
    )
}