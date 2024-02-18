import React, {useState} from 'react'
import './style.css'

export default function App() {
    const [ticTacToeArr, setTicTacToeArr] = useState(new Array(9).fill("empty"));
    /* circle, cross, empty */
    const [isCross, setIsCross] = useState(true);
    const [gameEndMessage, setGameEndMessage] = useState(""); //winner, draw

  return (
    <div>
        <div className='container'>
            {/* heading etc also */}
            <div className='grid'> {/* tic tac toe grid generation */}
                    {
                        ticTacToeArr.map((item, index)=>(
                            <div className='box' key={index}>
                                {item}
                            </div>
                        ))
                    }
            </div>
            
        </div>
    </div>

  )
}
