import React, {lazy, Suspense, useState} from 'react'
import { ErrorBoundary } from 'react-error-boundary'
// import Child1 from './Child1'
import Child2 from './Child2'
import FallbackSuspenseComponent from './FallbackSuspenseComponent'
import ErrorFallback from './ErrorFallback'

const LazyComponentExec1 = lazy(()=> import("./Child1"))



export default function App() {
    const [sampleS, setSampleS] = useState(1)
  return (
    <>
        
        <Suspense fallback={<div style={{backgroundColor: "red"}}> <FallbackSuspenseComponent/></div>}>
            <LazyComponentExec1 />
        </Suspense>
        <ErrorBoundary 
            FallbackComponent={<ErrorFallback />}
            onReset={() => {
                // reset the state of your app here
              }}
        >
        <Child2 />
        </ErrorBoundary>
    </>
  )
}
