/**
 *  The useMemo hook in React is used to memoize the result of a computation and
 *  recompute it only when one of the dependencies has changed.
 *  It is often employed to optimize performance by preventing unnecessary re-execution of expensive calculations
 *  or computations in functional components
 *
 *  syntax :
 *          useMemo(calcFunction, dependencyArray)
 *  Usage :
 *      - skipping expensive calculations
 *      - skipping re renders of components
 *      - memoize a function
 *
 */

import { useMemo, useState } from 'react'

const MemoComponent = ({ a, b }) => {
  const expensiveFunc = (a, b) => {
    return a + b //expensive operation
  }

  const memoValue = useMemo(() => {
    expensiveFunc(a, b)
  }, [a, b])

  return (
    <div>
      <p>expensive operation result : {memoValue}</p>
    </div>
  )
}

const App = () => {
  const [valueA, setValueA] = useState(4)
  const [valueB, setValueB] = useState(3)

  return (
    <div>
      <MemoComponent a={valueA} b={valueB} />
      <button
        onClick={() => {
          setValueA((prev) => prev + 1)
        }}
      >
        increment A
      </button>
      <button
        onClick={() => {
          setValueB((prev) => prev + 1)
        }}
      >
        increment B
      </button>
    </div>
  )
}

export default App
