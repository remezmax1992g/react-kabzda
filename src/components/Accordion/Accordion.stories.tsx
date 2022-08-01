import React, {useState} from "react"
import {action} from "@storybook/addon-actions"
import Accordion from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion,
}

export const MenuCollapsedMode = () => <Accordion title={"Menu"}
                                                  collapsed={true}
                                                  items={[]}
                                                  onChange={action("Accordion was collapsed or uncollapsed")}
                                                  onClickItem={action("Item was clicked")}/>

export const UsersUncollapsedMode = () => <Accordion title={"Users"}
                                                     collapsed={false}
                                                     items={[{title: "Maxim", value: 1},
                                                         {title: "Dima", value: 1},
                                                         {title: "Artem", value: 1},
                                                         {title: "Alexey", value: 1}]}
                                                     onChange={action("Accordion was collapsed or uncollapsed")}
                                                     onClickItem={action("Item was clicked")}/>

export const ModeChanging = () =>{
    const [value, setValue] = useState<boolean>(true)
        return <Accordion title={"Users"}
                          collapsed={value}
                          items={[{title: "Maxim", value: 1},
                              {title: "Dima", value: 1},
                              {title: "Artem", value: 1},
                              {title: "Alexey", value: 1}]}
                          onChange={setValue}
                          onClickItem={(id) => {alert(`user with ID ${id} should be happy`)}}/>
}