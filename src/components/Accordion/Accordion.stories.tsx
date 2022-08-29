import React, {useState} from "react"
import {action} from "@storybook/addon-actions"
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

const getCategoryObj = (categoryTitle: "Colors" | "Events" | "Main") => {
    return {
        table: {
            category: categoryTitle
        }
    }
}

export default {
    title: "Components/Accordion",
    component: Accordion,
    argTypes: {
        color: {
            control: "color",
            ...getCategoryObj("Colors")
        },
        onChange: {
            ...getCategoryObj("Events")
        },
        onClickItem: {
            ...getCategoryObj("Events")
        },
        items: {
            ...getCategoryObj("Main")
        },
        collapsed: {
            ...getCategoryObj("Main")
        },
        title: {
            ...getCategoryObj("Main")
        }
    }
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbackProps = {
    onChange: action("Accordion was collapsed or uncollapsed"),
    onClickItem: action("Item was clicked")
}
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    title: "Menu",
    collapsed: true,
    items: [],
}
export const UsersCollapsedMode = Template.bind({})
UsersCollapsedMode.args = {
    ...callbackProps,
    title: "Users",
    collapsed: false,
    items: [{title: "Maxim", value: 1},
        {title: "Dima", value: 2},
        {title: "Artem", value: 3},
        {title: "Alexey", value: 4}],
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args}
                      collapsed={value}
                      onChange={setValue}
    />
}

ModeChanging.args = {
    title: "Users",
    items: [
        {title: "Maxim", value: 1},
        {title: "Dima", value: 2},
        {title: "Artem", value: 3},
        {title: "Alexey", value: 4}
    ],
    onClickItem: (value: any) => {
        alert(`user with ID ${value} should be happy`)
    }


}