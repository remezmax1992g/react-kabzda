import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Raiting/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App is rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className="App">
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating onChange={(x)=>x}/>
            <Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType){
    console.log("AppTitle is rendering");
    return(
    <h1>{props.title}</h1>
    );
}

export default App;
