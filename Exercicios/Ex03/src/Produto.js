import React from 'react'

const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border:'1px solid', margin:'1rem',padding:'5px'}}>
        <p>{nome}</p>
        <ul>
            {propriedades.map((propriedade, index)=><li key={index}>{propriedade}</li>)}
        </ul>
    </div>
  )
}

export default Produto