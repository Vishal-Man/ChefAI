import React from "react";

const Fun = () =>{
  const [isGoingOut, setisGoingOut] = React.useState(false)
  function changeMind() {
    setisGoingOut(prev => !prev)
  }
  return(
    <main>
      <h1>Should I go out?</h1>
      <button onClick={changeMind}>{isGoingOut ? "Yes": "No"}</button>
    </main>
  )
}

export default Fun