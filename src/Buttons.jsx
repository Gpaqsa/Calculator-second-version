import React from 'react';
import './App.css';


function Buttons({symbol, handleClick}) {
  return (
    <>
          <button onClick={() => handleClick(symbol)} className='span-two'>{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="DEL">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="/">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="1">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="2">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="3">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="*">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="4">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="5">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="6">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="+">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="7">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="8">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="9">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="-">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol=".">{symbol}</button>
          <button onClick={() => handleClick(symbol)} symbol="0">{symbol}</button>
          <button className='equal'>=</button>
    </>
  )
}

export default Buttons
