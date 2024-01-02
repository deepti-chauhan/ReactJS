/**
 *  useReducer is React hook that lets you add reducer to your component
 *  useful in managing complex state logic in react
 *  It is often used when the state transitions are more complex than those achievable with useState
 *  when the next state depends on the previous state.
 *
 *  syntax :
 *          const [state, dispatch] = useReducer(reducer, intialArgs, init)
 */

import { useReducer } from 'react'

// reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        count: state.count - 1,
      }
    case 'RESET':
      return {
        count: 0,
      }
    default:
      return state
  }
}

//initialState

const initialState = {
  count: 0,
}

const counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  const resetReducer = () => {
    dispatch({ type: 'RESET' })
  }
  const incrementReducer = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const decrementReducer = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <div>
      <button onClick={incrementReducer}>Increment</button>
      <button onClick={decrementReducer}>Increment</button>
      <button onClick={resetReducer}>Increment</button>
    </div>
  )
}

export default counter
