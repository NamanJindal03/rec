import React from 'react'

export default function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div>
        <p>uuhhhhhhh something doesnt look right</p>
        {/* <p>Error: {error.message}</p> */}
        {/* <button onClick={resetErrorBoundary}>reset</button> */}
    </div>
  )
}
