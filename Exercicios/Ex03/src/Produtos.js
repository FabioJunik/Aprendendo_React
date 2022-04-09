import React from 'react'
import Produto from './Produto';
import Title from './Title'

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <div>
        <Title>Produtos</Title>
        <div>
           {produtos.map(produto=><Produto key={produto.nome} {...produto}/>)}
        </div>
    </div>
  )
}

export default Produtos