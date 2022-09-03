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
export const SetIntervalExampleConcerningUseEffect = () => {
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
export const ResetEffectExampleConcerningUseEffect = () => {
    const [counter, setCounter] = useState<number>(() => {
        return 1
    })
    console.log("Component was rendered:" + counter)
    useEffect(() => {
        console.log("Effect was occurred:" + counter)
    return () => {console.log("Reset effect:" + counter)}
    }, [counter])

    const increaseFn = () => {
        setCounter(counter+1)
    }

    return <>Hello, counter: {counter}<button onClick={increaseFn}>+</button>
    </>
}

export const KeysTrackerExampleConcerningUseEffect = () => {
    const [text, setText] = useState<string>("")
    console.log("Component was rendered:" + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }

    }, [text])


    return <>Typed text: {text}
    </>
}
export const SetTimeoutExampleConcerningUseEffect = () => {
    const [text, setText] = useState<string>("")
    console.log("Component was rendered:" + text)
    useEffect(() => {
        const timeoutID = setTimeout(() =>{
            console.log("SetTimeout was expired")
            setText("3 seconds was passed")
        }, 3000)
        return () => {clearTimeout(timeoutID)}
    }, [text])


    return <>Typed text: {text}
    </>
}

