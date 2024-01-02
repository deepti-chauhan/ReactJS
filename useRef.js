import React, { useRef } from 'react'

const counter = () => {
  const counterRef = useRef(0)

  const incrementRef = () => {
    counterRef.current += 1
    console.log('counter ref value incremented to ', counterRef.current)
  }

  const resetRef = () => {
    counterRef.current = 0
    console.log('counter ref value reset to ', counterRef.current)
  }

  return (
    <div>
      <button onClick={incrementRef}>Increment</button>
      <button onClick={resetRef}>Reset</button>
    </div>
  )
}

export default counter

/**
 * useRef don't cause re-renders
 */