import PadsBtn from "../components/tasks/SoundPadsComponent";
import padsData from "./pads";
import React from "react";

export default function Sound(darkMode) {

    let [pads, setPads] = React.useState(padsData)

    function toggle(id) {
        setPads(prevPads => prevPads.map(item => 
            item.id === id ? {...item, on: !item.on} : item
        ))
    }

    const buttonEl = pads.map(pad =>(
      <PadsBtn key={pad.id} id={pad.id} color={pad.color} on={pad.on} toggle={toggle}/>
    ))
    return(
        <main>
            <div>
                {buttonEl}
            </div>
        </main>
    )
}