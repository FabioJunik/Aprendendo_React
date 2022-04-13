import React, { useState } from 'react';
import Input from './Form/Input';

const App = ()=>{
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <form>
      <Input label='Nome' type='text' id='nome' value={nome} setValue={setNome} /><br/><br/>
      <Input label='Email' type='email' id='email' value={email} setValue={setEmail} required />
      <button>Enviar</button>
    </form>
  );
};

export default App;
