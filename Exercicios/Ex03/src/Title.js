import React from 'react'

const Title = ({text, children}) => {
  return (
    <h1 style={{color:'green'}}>{text}{children}</h1>
  )
}

export default Title