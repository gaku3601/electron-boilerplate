import React from 'react'
import useCounter from '@/useCounter'

const { api } = window

function Counter() {
  const { count, decrement, increment } = useCounter()
  return (
    <div>
      <button type="button" onClick={decrement}>-</button>
      <span>{count}</span>
      <button type="button" onClick={increment}>+</button>
      <button
        type="button"
        onClick={() => {
          api.openChildWindow()
        }}
      >
        open child window
      </button>
    </div>
  )
}

export default Counter
