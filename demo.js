import React, { useState } from 'react'

const demo = () => {
const [count, setCount] = useState(0);
const incrementHandle = () => {setCount{count + 1}}

return (
    <div>
      {count}
      <button onClick={incrementHandle}>Increment</button>
    </div>
  )
}

export default demo
