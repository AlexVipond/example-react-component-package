import React, { useState } from 'react';

export function Counter () {
  const [count, setCount] = useState(0)

  return (
    <button
      className="px-2 py-1 rounded shadow-md bg-blue-100 text-blue-900"
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  )
}
