import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div ClassName = 'user-info'>
	<img src=' https://avatars.githubusercontent.com/u/73350218?v=4'/> 
	<h1>
                             <a href = '"https://api.github.com/users/FabioJunik'>Fábio Junik</a>
	</h1>

	<ul className='repos-info'>
	         <li>- Repositórios: 122</li>
	         <li>- Seguidores: 10</li>
	         <li>- Seguindo: 	10</li>	
	</ul>

	<div className= 'actions'>
	           <button>Ver Repositorios</button>
	           <button>Ver Favoritos</button>
	</div>

	<div className= 'repos'>
	         <h2>Repositórios :</h2>
	         <ul>
		<li><a href='#'>Nome do repositorio</a></li>	      
	        </ul>
	</div>
	
	<div className= 'stared'>
	         <h2>Favoritos :</h2>
	         <ul>
		<li><a href='#'>Nome do repositorio</a></li>	      
	        </ul>
	</div>
         </div>        
    </div>
  );
}

export default App;
