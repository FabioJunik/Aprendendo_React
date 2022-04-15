import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import Head from './Head';

const Produto = () => {
    const {id} = useParams();
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setEror] = useState(null);

    useEffect(()=>{
        async function fetchProduto(url){
            try{
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                console.log(json)
                setProduto(json)

            }catch(erro){
                setEror('Ocorreu um erro');
            }finally{
                setLoading(false);
            }
        }

        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    },[id]);
    
    if(loading) return <div className='loading'></div>
    if(error) return <p>{error}</p>
    if(!produto) return
    
    return (
        <section className={styles.produto +' animeLeft'}>
            <Head title={`Ranek | ${produto.nome}`} 
                description={`Ranek | Este é um produto: ${produto.nome}`} />
            <div>
                {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo} />)}
            </div>
            <div >
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>{produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </section>
  )
}

export default Produto