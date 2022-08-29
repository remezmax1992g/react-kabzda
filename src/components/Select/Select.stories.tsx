import React, {useState} from "react"
import Select from "./Select";

export default {
    title: "Components/Select",
    component: Select
}


export const SelectWithValue = () => {
    const [value, setValue] = useState("2")
    return (
        <div>
            <Select
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moskow"},
                    {value: "3", title: "Kiev"},
                ]}
            onChangeSelect={setValue}/>
        </div>
    )
}
export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <div>
            <Select
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moskow"},
                    {value: "3", title: "Kiev"},
                ]}
                onChangeSelect={setValue}/>
        </div>
    )
}
