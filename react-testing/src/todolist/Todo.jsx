export default function Todo ({text, isCompleted = false, isDeleted = false}) {
    if (isDeleted) {
        return null
    } else {
        return (
            <li className="text-white">{text} {isCompleted && '✅'}</li>
        )
    }
}