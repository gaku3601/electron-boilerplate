import { useState } from 'react'

const useCounter = (initialCount: number = 0) => {
  const [count, setCount] = useState(initialCount)
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)
  return { count, decrement, increment }
}

export default useCounter
