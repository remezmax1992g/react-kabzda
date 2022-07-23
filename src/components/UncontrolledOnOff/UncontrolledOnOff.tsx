import React, {useState} from 'react';

type OnOffPropsType = {
    defaultOn?: boolean;
    onChange: (on: boolean) => void;
}

const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);
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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle}
                 onClick={onClicked}>ON
            </div>
            <div style={offStyle}
                 onClick={offClicked}>OFF
            </div>
            <div style={lightStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;