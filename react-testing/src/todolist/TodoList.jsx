import Todo from "./Todo"

export default function TodoList () {
    return (
        <ul>
            <Todo isCompleted text="Learn Javascript"/>
            <Todo isCompleted isDeleted text="Learn PHP"/>
            <Todo isCompleted text="Learn React"/>
            <Todo text="Learn Laravel"/>
        </ul>
    )
}