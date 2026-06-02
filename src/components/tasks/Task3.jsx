import React from 'react'

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    //const isGoingOut = true
    //let answer = isGoingOut ? "Yes": "No"
return (
     <main>
        <h1>Do I go out?</h1>
        <button onClick={() => {setIsGoingOut(!isGoingOut)}}>{isGoingOut ? "Yes": "No"}</button>
    </main>
)
}