import React from 'react';

type DigitalClockType = {
    date:Date
}

const DigitalClock: React.FC<DigitalClockType> = ({date}) => {
    const getStringDate = (num: number) => {
        return num < 10 ? "0" + num : num
    }
    const seconds = getStringDate(date.getSeconds())
    const minutes = getStringDate(date.getMinutes())
    const hours = getStringDate(date.getHours())
    return (
        <div>
            <span> {hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
    );
};

export default DigitalClock;