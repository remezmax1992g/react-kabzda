import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType ={
    title: string;
    items:Array<ItemType>
    collapsed: boolean;
    onChange: (collapsed: boolean) => void
    onClickItem: (value:any) => void
}


function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClickItem={props.onClickItem}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    onChange: (collapsed: boolean) => void

}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering");
    return (
        <h3 onClick={() => props.onChange(!props.collapsed)}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClickItem: (value:any) => void
}

function AccordionBody(props: AccordionBodyPropsType){
    console.log("AccordionBody is rendering");
    return(
        <ul>
            {props.items.map((el, index) => <li key={index} onClick={() => props.onClickItem(el.value)}>{el.title}</li>)}
        </ul>
    );
}

export default Accordion;