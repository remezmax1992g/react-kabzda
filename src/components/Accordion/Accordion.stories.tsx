import React, {useState} from "react"
import {action} from "@storybook/addon-actions"
import Accordion from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion,
}

export const MenuCollapsedMode = () => <Accordion title={"Menu"} collapsed={true} onChange={action("Accordion was collapsed or uncollapsed")}/>
export const UsersUncollapsedMode = () => <Accordion title={"Users"} collapsed={false} onChange={action("Accordion was collapsed or uncollapsed")}/>

export const ModeChanging = () =>{
    const [value, setValue] = useState<boolean>(true)
        return <Accordion title={"Menu"} collapsed={value} onChange={setValue}/>
}