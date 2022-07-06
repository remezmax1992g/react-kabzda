import React from 'react';
import './App.css';
import {Rating} from "./components/Raiting/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRating";

function App() {
    console.log("App is rendering");
    return (
        <div className="App">
            <OnOff/>
            <UncontrolledAccordion title="Menu"/>
            <UncontrolledAccordion title="Users"/>
            <UncontrolledRating/>
            {/*<Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
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
