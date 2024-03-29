import React from "react"
import {action} from "@storybook/addon-actions"
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: "Components/UncontrolledRating",
    component: UncontrolledRating,
}

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={action("rating was changed inside component")}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={action("rating was changed inside component")}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={action("rating was changed inside component")}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={action("rating was changed inside component")}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={action("rating was changed inside component")}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={action("rating was changed inside component")}/>

