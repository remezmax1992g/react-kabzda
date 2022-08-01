import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

export type ItemSelectType = {
    value: any
    title: string
}

export type SelectPropsType = {
    value: any
    items: Array<ItemSelectType>
    onChangeSelect: (value: any) => void
}

const Select = (props: SelectPropsType) => {
    let selectedItem = props.items.find((el => el.value === props.value))
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const toggleItem = () => setActive(!active)
    const onClickItem = (value: any) => {
        props.onChangeSelect(value)
        toggleItem()
    }
    useEffect(() => setHoveredElementValue(props.value), [props.value])
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const setElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if(setElement){
                        props.onChangeSelect(setElement.value)
                        break;
                    }
                }
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <div>
            <div className={styles.select}>
                <span className={styles.main}
                      onClick={toggleItem}
                      onKeyUp={onKeyUp}
                      tabIndex={0}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(it => <div className={it.value === hoveredElementValue ? styles.item : ""}
                                                    key={it.value}
                                                    onClick={() => onClickItem(it.value)}
                                                    onMouseEnter={() => setHoveredElementValue(it.value)}>
                            {it.title}</div>)}
                    </div>
                }
            </div>
        </div>
    );
};

export default Select;