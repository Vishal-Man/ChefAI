import React from 'react'

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState([])

    return(
        <div>
            {
                unreadMessages.length > 0 && 
                <h1> You have {unreadMessages.length} unread messages!</h1>
            }

            {
                unreadMessages.length === 0 &&
                <p>You have 0 unread messages</p>
                
            }
        </div>
    )
}