import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const liStyles ={
  color:'white',
  listStyle: 'none',
  fontSize: '17px',
  margin: '5px',
  width: '100px',
  height: '100px' 
}

const App = ()=>(
  <div>
    {produtos.map((item, index)=>{
        return( 
        <div key={index}>
          <h1>{item.nome}</h1>
          <p>Preco: {item.preco}</p>
          <ul style={{display:'flex'}}>
            {item.cores.map((cor,index)=>(
              <li key={index} style={{...liStyles, backgroundColor:cor}}>{cor}</li>
            ))}
          </ul>
        </div>)
      })}
  </div>
);

export default App;
