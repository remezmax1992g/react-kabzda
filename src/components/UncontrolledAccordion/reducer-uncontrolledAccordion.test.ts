import {
    collapsedAC,
    reducerUncontrolledAccordion,
    StateForUncontrolledAccordionType
} from "./reducer-uncontrolledAccordion";

test("reducer should change value of collapsed", () =>{
    const state: StateForUncontrolledAccordionType = {
        collapsed: false
    }

    const newState = reducerUncontrolledAccordion(state, collapsedAC());

    expect(state.collapsed).toBe(false)
    expect(newState.collapsed).toBe(true)
})