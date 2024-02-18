import React, {useState} from 'react'
import { FaTimes, FaCircle, FaPen  } from "react-icons/fa";
import './style.css'

let ticTacToeArr = new Array(9).fill("empty");

export default function App() {
    // const [ticTacToeArr, setTicTacToeArr] = useState(new Array(9).fill("empty"));
    /* circle, cross, empty */
    const [isCross, setIsCross] = useState(true);
    const [gameEndMessage, setGameEndMessage] = useState(""); //winner, draw

    function checkIsWinnerOrDraw(){
        if(
            ticTacToeArr[0] === ticTacToeArr[1] && 
            ticTacToeArr[1] === ticTacToeArr[2] &&
            ticTacToeArr[0] != "empty"
        ){
            console.log('here1')
            setGameEndMessage(`${ticTacToeArr[0]} won`);
            return;
        }
        if(
            ticTacToeArr[3] === ticTacToeArr[4] && 
            ticTacToeArr[4] === ticTacToeArr[5] &&
            ticTacToeArr[3] != "empty"
        ){
            console.log('here2')

            setGameEndMessage(`${ticTacToeArr[3]} won`);
            return;
        }
        if(
            ticTacToeArr[6] === ticTacToeArr[7] && 
            ticTacToeArr[7] === ticTacToeArr[8] &&
            ticTacToeArr[6] != "empty"
        ){
            console.log('here3')

            setGameEndMessage(`${ticTacToeArr[6]} won`);
            return;
        }
        if(
            ticTacToeArr[0] === ticTacToeArr[3] && 
            ticTacToeArr[3] === ticTacToeArr[6] &&
            ticTacToeArr[0] != "empty"
        ){
            console.log('here4')

            setGameEndMessage(`${ticTacToeArr[0]} won`);
            return;
        }
        if(
            ticTacToeArr[1] === ticTacToeArr[4] && 
            ticTacToeArr[4] === ticTacToeArr[7] &&
            ticTacToeArr[1] != "empty"
        ){
            console.log('here5')

            setGameEndMessage(`${ticTacToeArr[1]} won`);
            return;
        }
        if(
            ticTacToeArr[2] === ticTacToeArr[5] && 
            ticTacToeArr[5] === ticTacToeArr[8] &&
            ticTacToeArr[2] != "empty"
        ){
            console.log('here6')

            setGameEndMessage(`${ticTacToeArr[2]} won`);
            return;
        }
        if(
            ticTacToeArr[0] === ticTacToeArr[4] && 
            ticTacToeArr[4] === ticTacToeArr[8] &&
            ticTacToeArr[0] != "empty"
        ){
            console.log('here7')

            setGameEndMessage(`${ticTacToeArr[0]} won`);
            return;
        }
        if(
            ticTacToeArr[2] === ticTacToeArr[4] && 
            ticTacToeArr[4] === ticTacToeArr[6] &&
            ticTacToeArr[2] != "empty"
        ){
            console.log('here8')

            setGameEndMessage(`${ticTacToeArr[2]} won`);
            return;
        }
        //logic for draw
        let isDraw = true;
        for(let i=0; i<ticTacToeArr.length; i++){
            if(ticTacToeArr[i] === "empty"){
                isDraw = false;
                break;
            }
        }
        if(isDraw){
            setGameEndMessage('The Game is draw');
        }

    }
    function updateTicTacToe(index){
        if(gameEndMessage){
            console.log('Already game has ended');
            return;
        }
        if(ticTacToeArr[index] != "empty"){
            console.log('Position already filled, try another position');
            return;
        }
        // const tempArr = [...ticTacToeArr]
        ticTacToeArr[index] = isCross ? "cross" : "circle";
        // setTicTacToeArr(tempArr);
        setIsCross(!isCross);
        
        checkIsWinnerOrDraw();
    }
    function resetGame(){
        ticTacToeArr = new Array(9).fill("empty");
        setIsCross(true);
        setGameEndMessage("");
    }
  return (
    <div>
        <div className='container'>
            {gameEndMessage ?
                <div className='text-center heading1'>
                    {gameEndMessage}
                </div>
                :
                null
            }
            <FaCircle />
            <FaPen />
            <FaTimes />
            { !gameEndMessage ?
                <div className='text-center heading2'>
                    It's {isCross ? 'cross' : 'circle'}'s turn
                </div>
                : null
            }
            {/* heading etc also */}
            <div className='grid'> {/* tic tac toe grid generation */}
                    {
                        ticTacToeArr.map((item, index)=>(
                            <div className='box' key={index} onClick={() => updateTicTacToe(index)}>
                                {item}
                            </div>
                        ))
                    }
            </div>
            <div className='element-center'>
                    {gameEndMessage ? <button onClick={resetGame}>Reset Game</button> : null}
            </div>
            
        </div>
    </div>

  )
}
