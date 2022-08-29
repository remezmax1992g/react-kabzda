import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType ={
    title: string
    /*
    * Elements which are showed when it is opened. Each item should be ItemType.
    */
    items:Array<ItemType>
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    /*
    * Callback that is called when any item is clicked
    * @param value is value of clicked item
    */
    onClickItem: (value:any) => void
    /*
    * optional color of header text
    */
    color?: string
}


function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title}
                            onChange={props.onChange}
                            collapsed={props.collapsed}
                            color={props.color}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClickItem={props.onClickItem}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    onChange: (collapsed: boolean) => void
    color?: string

}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering");
    return (
        <h3 style={{color: props.color ? props.color : "black"}} onClick={() => props.onChange(!props.collapsed)}>{props.title}</h3>
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