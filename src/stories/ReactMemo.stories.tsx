import React, {useState} from "react"

export default {
    title: "React.memo demo"
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>{props.users.map((u, i) => <div key = {i}>{u}</div>)}</div>
}

const Users = React.memo(SecretUsers)

export const Example1 = () => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Max", "Artem", "Alex"])

    const addUser = () =>{
        setUsers([...users, "Svata" + new Date().getTime()])
    }
    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessageCounter count={count}/>
            <Users users={users}/>
        </div>
    )
}