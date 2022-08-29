import React, {useState} from "react"

export default {
    title: "Hooks demo/UseState"
}

export const Example1ForUseState = () => {
    console.log("Example1")
    const [counter, setCounter] = useState<number>(() => {
        console.log("initialValue")
        return 0
    })
    const changer = (state: number) => {
        return state + 1
    }

    return <div>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </div>

}