import React, {useEffect, useState} from "react"

export default {
    title: "UseEffect"
}

export const SimpleExampleConcerningUseEffect = () => {
    const[fake, setFake] = useState<number>(() =>{
        return 1
    })
    const [counter, setCounter] = useState<number>(() => {
        return 1
    })

    useEffect(() => {
        console.log("UseEffect every time")
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("UseEffect only first render(componentDidMount")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("UseEffect only first render and every counter change")
        document.title = counter.toString()
    }, [counter])
    return <div>
        Hello, {counter} {fake}
        <button onClick={() => setFake(state => state + 1)}>Fake+</button>
        <button onClick={() => setCounter(state => state + 1)}>Counter+</button>
    </div>
}