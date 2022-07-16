// Code EyesOnMe Component Here
// import React from 'react';
// import onfocus from "react";
// import onblur from "react";

// function EyesOnMe() {
//     return <button onClick={handleFocusBlur}>"Eyes on me "</button>
// }

// function handleFocusBlur(e) {
//  if(e=== "focus"){
//     console.log("Good");
//  }
//  else if(e === "blur"){
//     console.log("Hey! Eyes on me!"); 
//  }
// }

// export default EyesOnMe


import React from 'react'
import onfocus from 'react'
import onblur from 'react'

function getFocus() {
  console.log('Hey! Eyes on me!')
}

function goodFocus() {
  console.log('Good!')
}

function EyesOnMe() {
  return (
    <button onFocus={goodFocus} onBlur={getFocus}>Eyes on me</button>
  )
}

export default EyesOnMe
