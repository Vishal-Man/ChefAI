import React from "react";

export default function Condition() {
    const [messages, setMessages] = React.useState(["a","C", "b"])
    let text 

    if (messages.length === 0){
        text = "You're all caught up"
    } else if (messages.length === 1){
        text = "You have 1 unread messages"
    } else {
        text = `You have ${messages.length} unread messages`
    }

    return(
        <div>
            <p>{text}</p>

        </div>
    )
}