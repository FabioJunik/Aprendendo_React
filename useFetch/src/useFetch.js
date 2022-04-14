import React, { useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    async function request (url,options){
        try{
            setError(null);
            setLoading(true);
            const response = await fetch(url,options);
            const json = await response.json();
            setData(json);
        }catch(erro){
            setError('Erro');
        }finally{
            setLoading(false);
        }
    }
    return{data, error, loading, request}
}

export default useFetch