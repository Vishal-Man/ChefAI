import React, { useState } from 'react'
import Counter from '../components/tasks/CounterComponent'

export default function App() {
    let [Count, setCount] = React.useState(0)
    
    function add() {
        //setCount(Count + 1)
        setCount(prevCount => prevCount + 1)
    }
    function sub() {
        //  setCount(Count - 1)
        setCount(prevCount => prevCount - 1)
    }
    return(
        <main className='container'>
            <h1>How many times will have I said "State"</h1>
            <div className='counter'>
                <button className='minus' onClick={sub} aria-label='Decrese count'>-</button>
                <Counter number={Count}/>
                <button className='plus' onClick={add} aria-label='Increase count'>+</button>
            </div>
        </main>
    )
}