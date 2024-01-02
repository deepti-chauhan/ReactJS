/*
    useState is a React Hook that lets you add a state variable to your component.
    syntax : const [state, setState] = useState(initialState);
        state : the current state
        setState : function to update current states 
    Usage
        - Adding state to a component
        - Updating state based on the previous state
        - Updating objects and arrays in state
        - Avoiding recreating the initial state
        - Resetting state with a key
        - Storing information from previous renders
*/

import React, { useState } from 'react'

const counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>{counter}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default counter
