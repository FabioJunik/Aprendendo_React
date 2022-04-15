import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';

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
                setProduto(json)

            }catch(erro){
                setEror('Ocorreu um erro');
            }finally{
                setLoading(false);
            }
        }

        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    },[id]);
    
    if(loading) return <div>Carregando...</div>
    if(error) return <p>{error}</p>
    if(!produto) return

    return (
    <div className={styles.produto}>
        <h1>Produto</h1>
    </div>
  )
}

export default Produto