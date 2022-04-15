import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos , setProdutos] = useState(null);

  useEffect(()=>{
      fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then(response => response.json())
      .then(json => setProdutos(json))
  },[])
  return (
    <>
      {produtos && 
        <section className={styles.produtos +' animeLeft'}  >
          {produtos.map(produto=>(
            <Link to={`produto/${produto.id}`} key={produto.id}>
              {console.log(produto)}
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
              <h1 className={styles.nome}>{produto.nome}</h1>
            </Link>
          ))}      
        </section>
      }
    </>
  )
}

export default Produtos