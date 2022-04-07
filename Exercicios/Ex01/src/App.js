import React from 'react';
import './App.css';

const fabio = {
  cliente : 'Fábio dos Santos',
  idade : 19,
  compra : [
    {nome : 'Notebook', preco: '350000 kz'},
    {nome : 'Smatphone', preco: '280000 kz'},
    {nome : 'Cadeira', preco: '95000 kz'},
    {nome : 'Televisão', preco: '100000 kz'}
  ],
  ativo: true
};

const antonio = {
  cliente : 'António Muteka',
  idade : 18,
  compra : [
    {nome : 'Notebook', preco: '450000 kz'},
    {nome : 'Smatphone', preco: '380000 kz'},
    {nome : 'Cadeira', preco: '65000 kz'},
    {nome : 'Televisão', preco: '200000 kz'}
  ],
  ativo: false
};

const dados = antonio;
const [color, state] = dados.ativo ? ['green','Ativo'] : ['red','Inativo'];
const values = dados.compra.map((item)=>Number(item.preco.replace('kz',' ').trim()));
const total = values.reduce((cont,item)=>cont+=item); 

const App = ()=>(
  <div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p >
        Situação: 
        <span style={{color:color}}> {state }</span>
    </p>
    <p>Total de gasto: {total} kz</p>
    {total > 1000000 && <p>Você esta gastando muito</p>}
  </div>
);

export default App;
