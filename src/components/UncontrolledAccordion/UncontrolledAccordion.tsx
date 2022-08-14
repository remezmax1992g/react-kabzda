import React, {useReducer} from "react";
import {collapsedAC, reducerUncontrolledAccordion} from "./reducer-uncontrolledAccordion";

type AccordionPropsType ={
    title: string;
}
function UncontrolledAccordion(props: AccordionPropsType) {
    let [stateCollapsed, collapsedDispatch] = useReducer(reducerUncontrolledAccordion,{collapsed: false})
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=> collapsedDispatch(collapsedAC())}/>
            {!stateCollapsed.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
    onClick:() => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering");
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
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