// Code Keypad Component Here

import React from 'react'

function getPassword() {
  console.log('Entering password...')
}

function Keypad() {
  return (
    <input type="password" onChange={getPassword}/>
  )
}

export default Keypad

