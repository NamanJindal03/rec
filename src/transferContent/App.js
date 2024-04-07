import React, { useState } from 'react'
import List from './List'
import Control from './Control'

import './style.css'

const INITIAL_ITEM_DATA = ['TASK1', 'TASK2', 'TASK3', 'TASK4'];
export default function App() {
    const [leftSide, setLeftSide] = useState(INITIAL_ITEM_DATA);
    const [rightSide, setRightSide] = useState([]);
    const [checkedItem, setCheckedItems] = useState([]);

    function handleCheckItemClick(item){
        console.log(item)
        const itemIndex = checkedItem.indexOf(item);
        console.log(itemIndex);
        if(itemIndex === -1){
            setCheckedItems((prev)=>{
                console.log(prev);
                console.log(item)
                return [...prev, item]
            })
        }
        else{
            setCheckedItems((prev)=>{
                prev.splice(itemIndex,1);
                return [...prev]
            })
        }
    }
    function filterMovingItems(list, checkedItem){
        const filterList = list.filter((item)=>{
            return checkedItem.indexOf(item) !== -1
        })
        return filterList;
    }
    function filterRemainingItems(list, itemToRemove){
        const filterList = list.filter((item)=>{
            return itemToRemove.indexOf(item) === -1
        })
        return filterList;
    }
    function handleRightShift(){
        const newRightItems = filterMovingItems(leftSide, checkedItem);
        const remainingItems = filterRemainingItems(leftSide, newRightItems);
        const remainingCheckedItems = filterRemainingItems(checkedItem, newRightItems);
        setRightSide((prev) =>{
            return [...prev, ...newRightItems]
        })
        setLeftSide(remainingItems);
        setCheckedItems(remainingCheckedItems);
    }
    function handleLeftShift(){
        const newLeftItems = filterMovingItems(rightSide, checkedItem);
        const remainingItems = filterRemainingItems(rightSide, newLeftItems);
        const remainingCheckedItems = filterRemainingItems(checkedItem, newLeftItems);
        setLeftSide((prev) =>{
            return [...prev, ...newLeftItems]
        })
        setRightSide(remainingItems);
        setCheckedItems(remainingCheckedItems);
    }
    function handleShift(position){
        /* 
            position here refers the final destination -> right
        */
       const list =position === 'right' ? leftSide : rightSide;
        const newItems = filterMovingItems(list, checkedItem);
        const remainingItems = filterRemainingItems(list, newItems);
        const remainingCheckedItems = filterRemainingItems(checkedItem, newItems);
        if(position === 'right'){
            setRightSide((prev) =>{
                return [...prev, ...newItems]
            })
            setLeftSide(remainingItems);
            setCheckedItems(remainingCheckedItems);
        }
        if(position === 'left'){
            setLeftSide((prev) =>{
                return [...prev, ...newItems]
            })
            setRightSide(remainingItems);
            setCheckedItems(remainingCheckedItems);
        }
    }
  return (
    // <div className='transferContainer flex'>
    //     <List list={leftSide} handleCheckItemClick={handleCheckItemClick}/>
    //     <Control handleLeftShift={handleLeftShift} handleRightShift={handleRightShift}/>
    //     <List list={rightSide} handleCheckItemClick={handleCheckItemClick}/>
    // </div>
    <div className='transferContainer flex'>
        <List list={leftSide} handleCheckItemClick={handleCheckItemClick} />
        <Control handleShift={handleShift}/>
        <List list={rightSide} handleCheckItemClick={handleCheckItemClick} />
    </div>
  )
}
