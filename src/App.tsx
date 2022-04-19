import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Counter from '@/Counter'
import Hello from '@/Hello'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </HashRouter>
  )
}

export default App
