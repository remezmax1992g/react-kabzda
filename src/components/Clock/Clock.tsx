import React, {useEffect, useState} from 'react';
import DigitalClock from "./DigitalClock/DigitalClock";
import AnalogClock from "./AnalogClock/AnalogClock";

type ClockType = {
    mode?: "digital" | "analog"
}

const Clock = (props: ClockType) => {
    const[date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(() => {setDate(new Date())
            console.log("TICK")}, 1000)

        return () => {
            clearInterval(intervalID)
        }
    },[])

    let view
    switch (props.mode){
        case "analog":
            view = <AnalogClock date={date}/>
            break
        case "digital":
            view = <DigitalClock date={date}/>
            break
    }
    return (
        <div>
            {view}
        </div>
    );
};

export default Clock;