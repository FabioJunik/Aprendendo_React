import React, {useEffect, useState} from 'react';
import Produto from './Produto';


const App = ()=>{

  const [dados, setDados] = useState(null);

  const getProduts = async (produt) =>{
    const request = await fetch('https://ranekapi.origamid.dev/json/api/produto/'+produt);
    const json = await request.json();
    setDados(json);
  }

  useEffect(()=>{
    const produtOfLocalStorege = localStorage.getItem('produt');
    
    if(produtOfLocalStorege){
      setDados(JSON.parse(produtOfLocalStorege))
    }

  },[]);

  useEffect (()=>{
    localStorage.setItem('produt',JSON.stringify(dados));
  },[dados])
  return(
    <div>
      <button onClick={async () => await getProduts('notebook')}>Notebook</button>
      <button onClick={async () => await getProduts('smartphone')}>Smartphone</button>
      {dados && <Produto dados={dados}/>}
    </div>
  );
};

export default App;
