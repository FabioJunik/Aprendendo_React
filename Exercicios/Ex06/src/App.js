import React, { useState } from 'react';
import './App.css'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const App = ()=>{
  const [form, setForm] = useState(formFields.reduce((acc, field) => ({...acc, [field.id]: ''}) , {}));
  
  const [response, setResponse] = React.useState(null);
  const handleChange =({target})=>{
    const {id, value} = target;
    setForm({...form, [id]: value});
  }

  const handleSubmit =(event)=>{
      event.preventDefault();
      fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
      console.log(response)
    });

  }

  return (
    <form>
      {formFields.map(({id,label,type})=>(
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <br/>
          <input type={type} id={id} name={id} value={form[id]} onChange={handleChange}/>
          <br/>
        </div>
      ))}
      <button onClick={handleSubmit}>Enviar</button>
      {response && response.ok && alert('Formulario enviado com sucesso')}
    </form>
  );
};
export default App;
