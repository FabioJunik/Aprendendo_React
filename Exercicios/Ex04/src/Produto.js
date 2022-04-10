import React from 'react'

const Produto = ({dados}) => {
  return (
    <div>
        <h1>{dados.nome}</h1>
        <p>{dados.preco}</p>
        <img src={dados.fotos[0].src} width='250px'/>
    </div>
  )
}

export default Produto