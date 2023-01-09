import React from 'react'
import './style.scss'

function Count({ value, setValue }) {
  return (
    <div className="count-wrapper d-flex align-items-center justify-content-between mt-2 mb-2">
      <button onClick={() => (value !== 1 ? setValue(prev => prev - 1) : null)}>-</button>
      <input
        className="count"
        value={value}
        onChange={setValue}
      />
      <button onClick={() => setValue(prev => prev + 1)}>+</button>
    </div>
  )
}

export default Count
