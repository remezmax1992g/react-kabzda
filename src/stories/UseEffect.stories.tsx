import React, {useEffect, useState} from "react"

export default {
    title: "Hooks demo/UseEffect"
}

export const SimpleExampleConcerningUseEffect = () => {
    const [fake, setFake] = useState<number>(() => {
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
export const SetTimeoutExampleConcerningUseEffect = () => {
    const [counter, setCounter] = useState<number>(() => {
        return 1
    })
    console.log("SetTimeoutExample")

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <div>
        Hello, Counter:{counter}
    </div>
}
export const ClockExampleConcerningUseEffect = () => {
    const [newDate, setDate] = useState(() => {
        let date = new Date(),
            hours = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()),
            minutes = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()),
            seconds = (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
        return {hours, minutes, seconds}
    })
    console.log("ClockExample")

    useEffect(() => {
        setInterval(() => {
            setDate(() => {
                let date = new Date(),
                    hours = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()),
                    minutes = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()),
                    seconds = (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
                return {hours, minutes, seconds}
            })

        }, 1000)
    }, [])

    return <div>
        {newDate.hours + ":" + newDate.minutes + ":" + newDate.seconds}
    </div>
}