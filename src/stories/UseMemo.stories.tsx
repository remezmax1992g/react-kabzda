import React, {useMemo, useState} from "react"

export default {
    title: "useMemo"
}

export const DifficultCountingExample1 = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    let resultA
    let resultB = 1
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </div>
    )
}
const SecretUsers = (props: { users: Array<string> }) => {
    console.log("SECRETUSERS")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(SecretUsers)
export const HelpForReactMemoExample2 = () => {
    console.log("HelpToReactMemo")
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Max", "Artem", "Alex", "John"])
    let newArrayOfUsers = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])
    const addUser = () => {
        setUsers([...users, "Svata" + new Date().getTime()])
    }
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            <button onClick={() => addUser()}>add user</button>
            {count}
            <Users users={newArrayOfUsers}/>
        </div>
    )
}