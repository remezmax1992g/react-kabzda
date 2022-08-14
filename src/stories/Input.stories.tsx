import React, {ChangeEvent, useRef, useState} from 'react';
import OnOff from "../components/OnOff/OnOff";

export default {
    title: 'Input',
    component: OnOff
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return <><input onChange={onChange}/>-{value}</>
}
export const GetValueOfUncontrolledInputByPressButton = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        -actual value: {value}</>
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input value={parentValue} onChange={onChange}/>)
}
export const ControlledCheckbox = () => {
    const [checkValue, setCheckValue] = useState<boolean>(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckValue(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={checkValue} onChange={onChange}/>)
}

export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }
    return (
        <select value={selectValue} onChange={onChange}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moskow</option>
            <option value="3">Kiev</option>
        </select>
    )
}