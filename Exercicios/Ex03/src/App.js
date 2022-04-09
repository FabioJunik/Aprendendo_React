import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = ()=>{
  const {pathname} = window.location;
  let Pagina = pathname === '/'? Home: Produtos;
  return(
   <>
      <Header/>
      <Pagina/>
    </>
  )
};

export default App;
