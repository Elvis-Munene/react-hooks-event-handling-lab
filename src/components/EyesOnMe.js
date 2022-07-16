import React from 'react'
import onfocus from 'react'
import onblur from 'react'

function focusBlur() {
  console.log('Hey! Eyes on me!')
}

function focusOnfocus() {
  console.log('Good!')
}

function EyesOnMe() {
  return (
    <button onFocus={focusOnfocus} onBlur={focusBlur}>Eyes on me</button>
  )
}

export default EyesOnMe
