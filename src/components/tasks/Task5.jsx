import React from 'react';

const Arar = () => {
    const [myFavItems, setMyFavItems] = React.useState([])
    const allFavItems = ["flowers", "animals", "trees", "food"]
    const thingsElements = myFavItems.map(things => <p key={things}>{things}</p>)

    function addFavThings() {
        setMyFavItems(prevFavThings => [...prevFavThings, allFavItems[prevFavThings.length]])
    }

    return(
        <main>
            <button onClick={addFavThings}>Add Items</button>
            {thingsElements}
        </main>
    )
}

export default Arar