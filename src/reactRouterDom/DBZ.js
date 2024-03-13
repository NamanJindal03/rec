import React from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom'
export default function DBZ() {
    const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
        {searchParam.get('dbz-character') && <h1>Selected Radio: {searchParam.get('dbz-character')} </h1>}
        
        {
            ['Goku', 'Vegeta', 'Picolo', 'Gohan'].map((dbCharacter, id)=>{
                return (
                    <div key={id}>
                        <input
                            type='radio'
                            value={dbCharacter.toLocaleLowerCase()}
                            checked={searchParam.get('dbz-character') === dbCharacter.toLocaleLowerCase()}
                            // checked={true}
                            onChange={(e)=>{
                                setSearchParam(createSearchParams({'dbz-character': e.target.value}))
                            }}
                            
                        >
                        </input>
                        <label htmlFor="">{dbCharacter}</label>
                    </div>
                )
            })
        }
    </div>
  )
}
