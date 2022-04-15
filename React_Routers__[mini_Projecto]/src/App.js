import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contatos from './Components/Contatos';
import Produto from './Components/Produto';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Produtos/>}/>
            <Route path='contatos' element={<Contatos/>}/>
            <Route path='produto/:id' element={<Produto/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
