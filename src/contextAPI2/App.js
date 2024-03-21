import React, { useState } from 'react'
import Parent1 from './Parent1'
import Parent2 from './Parent2'

import Provider1 from './Provider1'
import { Provider2 } from './context2'

export default function App() {
  return (
    <div>
      <Provider1>
        <>
          <Parent1 />
          <Parent2 />
        </>
      </Provider1>
    </div>

  )
}

/* 
    {counter: counter}

    ES6 syntax ->
    {counter}
*/
