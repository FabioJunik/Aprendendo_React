import './App.css';
import React from 'react';
import Search from './components/Search/search';
import UserInfo from './components/user-info/user-info';
import Actions from './components/Actions/actions'; 
import Repos from './components/Repos/repos';

function App() {
  return (
    <div className="App">
		<Search/>
		<UserInfo/>
		<Actions/>
		<Repos 
			className='repos' 
			title='Repósitorios' 
			repos={[{
						name : 'Nome do repositorio', 
						link:'#'
					},
					{
						name : 'Nome do repositorio2', 
						link:'#2'
					}]}	
		/>
			
			<Repos 
			className='starred' 
			title='Favóritos' 
			repos={[{
						name : 'Nome do repositorio', 
						link:'#'
					},
					{
						name : 'Nome do repositorio2', 
						link:'#2'
					}]}	
		/>
    </div>
  );
}

export default App;
