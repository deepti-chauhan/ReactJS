/**
 *  prop drilling - when a parent component creates a state and do not cosume it instead pass it down to
 *  its child component which also eventually pass it down to another component tht finally cosumes it.
 *
 *  An elongated prop is a prop that is not consumed but it is only passed down to another component. 
 */

import { useState } from 'react'

function App() {
  const [state, setState] = useState({ name: 'Deepti' })

  return (
    <div>
      <Header state={state}></Header>
    </div>
  )
}

function Header({ state }) {
  return (
    <div>
      <h1>This is header component</h1>
      <Content state={state}></Content>
    </div>
  )
}

function Content({ state }) {
  return (
    <div>
      <p>My name is {state.name}</p>
    </div>
  )
}

export default App
