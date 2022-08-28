import React, {useEffect, useState} from 'react';

type ClockType = {

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
    const getStringDate = (num: number) => {
        return num < 10 ? "0" + num : num
    }
    const seconds = getStringDate(date.getSeconds())
    const minutes = getStringDate(date.getMinutes())
    const hours = getStringDate(date.getHours())
    return (
        <div>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
        </div>
    );
};

export default Clock;