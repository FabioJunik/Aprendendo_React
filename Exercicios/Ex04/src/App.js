import React, {useState} from 'react';
import './App.css';
import Produto from './Produto';


const API = `https://ranekapi.origamid.dev/json/api/produto/`;

const App = ()=>{
  
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  const basicFech = async (produt) =>{
      setCarregando(true)
      const produtRequest = await fetch(`${API}${produt}`)
      const produtJson = await produtRequest.json();

      setDados(produtJson)
      setCarregando(false)
  }

  return (
    <div>
      <button onClick={async () => await basicFech('notebook')}>Notebook</button>
      <button onClick={async () => await basicFech('smartphone')}>Smartphone</button>
      <button onClick={async () => await basicFech('tablet')}>Tablet</button>
      {carregando && <p>Carregando ...</p>}
      {!carregando && dados && <Produto dados={dados}/>}
    </div>
  )
};

export default App;
