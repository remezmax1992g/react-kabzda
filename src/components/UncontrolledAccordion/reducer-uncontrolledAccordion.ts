export const COLLAPSED = "TOGGLE-COLLAPSED"

type CollapsedACType = ReturnType<typeof collapsedAC>
export type StateForUncontrolledAccordionType = {
    collapsed: boolean
}

export const reducerUncontrolledAccordion = (state: StateForUncontrolledAccordionType, action: CollapsedACType): StateForUncontrolledAccordionType => {
    switch(action.type){
        case COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error("I can't determine action type")
    }
}

export const collapsedAC = () => {
    return{
        type: COLLAPSED
    }as const
}