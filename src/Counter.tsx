import React from 'react'
import useCounter from '@/useCounter'

function Counter() {
  const { count, decrement, increment } = useCounter()
  return (
    <div>
      <button type="button" onClick={decrement}>-</button>
      <span>{count}</span>
      <button type="button" onClick={increment}>+</button>
    </div>
  )
}

export default Counter
