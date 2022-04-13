import React, { useState } from 'react';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = ()=>{
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [provincias, setProvincias] = useState('');
  const [resposta, setResposta] = useState('');
  
  return (
    <form>
      <Input label='Nome' type='text' id='nome' value={nome} setValue={setNome} /><br/><br/>
      <Input label='Email' type='email' id='email' value={email} setValue={setEmail} required />
      
      <Select options={['Luanda','Benguela','Huambo']} value={provincias} setValue=
      {setProvincias}/><br/><br/>

      <Radio options={['Sim','Não','Talvez']} value={resposta} setValue={setResposta}/><br/>< br/>      
      <button>Enviar</button>
    </form>
  );
};

export default App;
