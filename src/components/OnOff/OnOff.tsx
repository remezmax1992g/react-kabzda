import React, {useState} from 'react';

type PropsType = {
    // on: boolean
}

const OnOff = (props: PropsType) => {
    let [on, setOn] = useState(false);
    const onStyle = {
        width: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    }
    const lightStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"


    }
    return (
        <div>
            <div style={onStyle} onClick = {() => setOn(true)}>ON</div>
            <div style={offStyle} onClick = {() => setOn(false)}>OF</div>
            <div style={lightStyle}></div>
        </div>
    );
};

export default OnOff;