import Clock from "./Clock";

export default{
    title: "Components/Clock",
    component: Clock
}

export const BaseAnalogExampleOfClock = () => {
    return <Clock mode="analog"/>
}
export const BaseDigitalExampleOfClock = () => {
    return <Clock mode="digital"/>
}