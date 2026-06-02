import React from "react";
import avatar from "../assets/User.png"
import Star from "../components/tasks/ContactCardSartDisplayComp"

export default function Card() {
    const [contact, setContanct] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 2345678901",
        email: "itsanemail@email.com",
        isEmployeed: true
    })

    function toggleEmployed() {
        setContanct(prevContact => {
            return {
                ...prevContact,
                isEmployeed: !prevContact.isEmployeed
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img 
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">

                    <Star isFilled={contact.isEmployeed} onClick={toggleEmployed}/>

                    <h2 className="name">{contact.firstName} {contact.lastName}</h2>
                    <h2>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </h2>
                </div>
            </article>
        </main>
    )
}