import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        width: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: !props.on ? "red" : "white"
    }
    const lightStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"


    }
    return (
        <div>
            <div style={onStyle} onClick = {() =>props.onChange(true)}>ON</div>
            <div style={offStyle} onClick = {() => props.onChange(false)}>OFF</div>
            <div style={lightStyle}></div>
        </div>
    );
};

export default OnOff;