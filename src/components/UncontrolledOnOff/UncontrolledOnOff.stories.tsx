import React from "react"
import {action} from "@storybook/addon-actions"
import UncontrolledOnOff from "./UncontrolledOnOff";


export default {
    title: "Components/UncontrolledOnOff",
    component: UncontrolledOnOff,
}

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={action("on or off was clicked")}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={action("on or off was clicked")}/>
