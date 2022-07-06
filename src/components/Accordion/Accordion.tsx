import React from "react";

type AccordionPropsType ={
    title: string;
    collapsed: boolean;
}


function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
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

export default Accordion;