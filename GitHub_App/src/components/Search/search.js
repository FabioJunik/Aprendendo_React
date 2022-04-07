import React from "react";

const Search = ({handleSearch})=>(
    <div className='searchContent'>
		<input 
			type='search'
			placeholder='Digite o nome do usuario do GitHub'
			onKeyUp={handleSearch}/>
	</div>
);

export default Search;