import React, {useState} from 'react';

const App = ()=>{
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
  const [cores, setCores] = useState(['azul']);
 
  const handleChange = ({target}) =>{

    let {value, checked} = target;
    let colors = checked ? [...cores, value]:cores.filter(cor=> cor !== value)
    setCores(colors);
    
  }
  return (
    <form>
      {console.log(cores)}
      {coresArray.map(cor =>(
        <label key={cor} style={{textTransform: 'capitalize'}}>
          <input
            type='checkbox'
            value={cor}
            onChange={handleChange}
            checked={cores.includes(cor)}
          />
          {cor}
          <br/>
        </label>
      ))}
    </form>
  )
};

export default App;
