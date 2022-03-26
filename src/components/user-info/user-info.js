import React from "react";

const UserInfo = ()=>(
    <div className = 'user-info'>
			
			<img src=' https://avatars.githubusercontent.com/u/73350218?v=4'/> 
			
			<div className='basic-info'>
				<h1 className='username'>
					<a href = '"https://api.github.com/users/FabioJunik'>Fábio Junik</a>
				</h1>

				<ul className='repos-info'>
					<li>Repositórios: 122</li>
					<li>Seguidores: 10</li>
					<li>Seguindo: 10</li>	
				</ul>
			</div>
		</div> 
);

export default UserInfo;