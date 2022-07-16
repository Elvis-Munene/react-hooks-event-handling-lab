// Code Keypad Component Here

import React from 'react'

function obtainPassword() {
  console.log('Entering password...')
}

function Keypad() {
  return (
    <input type="password" onChange={obtainPassword}/>
  )
}

export default Keypad

