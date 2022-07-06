import React, {useState} from "react";

type AccordionPropsType ={
    title: string;
}


function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering");
    return (
        <h3>{props.title}</h3>
    );
}
function AccordionBody(){
    console.log("AccordionBody is rendering");
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;