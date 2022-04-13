import React, { useState } from 'react';
import Input from './Form/Input';
import Select from './Form/Select';

const App = ()=>{
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [provincias, setProvincias] = useState('');
  
  return (
    <form>
      <Input label='Nome' type='text' id='nome' value={nome} setValue={setNome} /><br/><br/>
      <Input label='Email' type='email' id='email' value={email} setValue={setEmail} required />
      <Select options={['Luanda','Benguela','Huambo']} value={provincias} setValue={setProvincias}/><br/>
      <button>Enviar</button>
    </form>
  );
};

export default App;
