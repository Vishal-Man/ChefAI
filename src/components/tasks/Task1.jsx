import React from "react";

export default function States() {
    let [isGreeting, setIsGreeting] = React.useState("yes")
    function handleClick() {
        setIsGreeting("Definately")
    }
return (
    <main>
        <h1>States tasks</h1>
        <button onClick={handleClick}>{isGreeting}</button>
    </main>
)
}