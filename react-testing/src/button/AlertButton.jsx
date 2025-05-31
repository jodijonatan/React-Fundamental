export default function AlertButton ({text, message}) {
    function handleClick () {
        alert(message);
    }

    return (
        <button className="bg-sky-200 rounded-full px-2 py-1 mt-6 cursor-pointer" onClick={handleClick}>{text}</button>
    )
}