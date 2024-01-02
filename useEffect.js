/*
    useEffect : used to perform sideEffects in a functional compoenents. Side effects may include 
        - data fetching 
        - manually changing DOM
        - subscriptions
        - or any othe oprations that need to be render after intital render or whenever state changes
        
    syntac : 
        useEffect( callbackFunc, dependencyArray)

        useEffect(()=>{
            //func body 


            //cleanup Func (optional)
            return ()=>{
                //cleanup func body
            }
        },[dependencies])

    Side effects are not predictable because they are actions which are performed with the "outside world."

    Common side effects include:

    -   Making a request to an API for data from a backend server
    -   To interact with browser APIs (that is, to use document or window directly)
    -   Using unpredictable timing functions like setTimeout or setInterval

    useEffects is a tool/Hook that lets you interact with the outside world but donot affect the rendering process
    or performance of the components it's in.

*/

//make api request

import { useEffect } from 'react'

const fetchDataComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div>
      <p>Data Fetched</p>
      <div>
        {data.map((item) => (
          <li key={item.id}>{item.post}</li>
        ))}
      </div>
    </div>
  )
}

export default fetchDataComponent
