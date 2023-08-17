import React from 'react';
import './App.css';
import Row from './todoitems/Row';
import { useState } from 'react';
import Refresh from './todoitems/Refresh';


function App() {
  // eslint-disable-next-line
  const [value, setvalue] = useState(Array(9).fill(null));
  const [isx, setX] = useState(0);
  const [win, setWin] = useState(null);
  function refreshPage() {
    window.location.reload(false);
  }
  function handleClick(index){
    if(value[index]) return;
    const cpy = [...value];
    cpy[index] = (isx)?"X":"O";
    setX(()=>(!isx));
    setvalue(cpy);
  }
  function isWin(){
    if(win!==null) return value[win]==='X'?"Player 2 is winner":"Player 1 is winner";
    let winMat = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    let f = 0;
    for(let logic of winMat){
       const [a,b,c] = logic;
       if(value[a]&&value[a]===value[b]&&value[b]===value[c]){  
        setWin(a);
        return value[a]==='X'?"Player 2 is winner":"Player 1 is winner";
       }
       if(value[a]===null||value[b]===null||value[c]===null) f = 1;
    }
    if(f===0) return "Draw, Please restart the game";
    return 0;
  }
  let iswinner = isWin();
  return (  
    <div className='mndiv'>
      {(iswinner)?(<><p className='winner'>{iswinner}</p></>):<><p className='winner'>Tic Tac Toe App</p></>}
      <div className='dv'>
         <Row onClick={()=>handleClick(0)} value = {value[0]}/> 
        <Row onClick={()=>handleClick(1)} value = {value[1]}/>
        <Row onClick={()=>handleClick(2)} value = {value[2]}/>
      </div>
      <div className='dv'>
        <Row onClick={()=>handleClick(3)} value = {value[3]}/>
        <Row onClick={()=>handleClick(4)} value = {value[4]}/>
        <Row onClick={()=>handleClick(5)} value = {value[5]}/>
      </div>
      <div className='dv'>
        <Row onClick={()=>handleClick(6)} value = {value[6]}/>
        <Row onClick={()=>handleClick(7)} value = {value[7]}/>
        <Row onClick={()=>handleClick(8)} value = {value[8]}/>
      </div>
      <Refresh value={refreshPage} />
    </div>
  );
}

export default App;
