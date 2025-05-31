import Todo from "./Todo"

export default function TodoList () {
    const data = [
        {
            id : 0,
            text : "Learn Javascript",
            isCompleted : true
        },
        {
            id : 1,
            text : "Learn PHP",
            isCompleted : true,
        },
        {
            id : 2,
            text : "Learn React",
            isCompleted : true
        },
        {
            id : 3,
            text : "Learn Laravel",
            isCompleted : false
        },
        {
            id : 4,
            text : "Learn Golang",
            isCompleted : false
        }
    ]

    return (
        <ul>
            {data.map((todo) => <Todo key={todo.id} {...todo}/>)}
        </ul>
    )
}