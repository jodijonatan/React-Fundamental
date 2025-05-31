export default function Row ({id, text}) {
    return (
        <tr className="border-2 border-white text-white">
            <td className="border-2">{id}</td>
            <td className="border-2">{text}</td>
        </tr>
    )
}