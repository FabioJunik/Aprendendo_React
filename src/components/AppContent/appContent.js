import React from "react";
import  PropTypes from "prop-types";
import Search from '../Search/search';
import UserInfo from '../user-info/user-info';
import Actions from '../Actions/actions'; 
import Repos from '../Repos/repos';

const AppContent = ({userInfo,  repos, starred})=>(
    <div className="App">
        <Search/>
        {!!userInfo &&< UserInfo userInfo={userInfo}/> }
        {!!userInfo && <Actions/>}
        {!!repos.length && <Repos 
            className='repos' 
            title='Repósitorios' 
            repos={repos}	
        />}
                    
        {!!starred.length && <Repos 
            className='starred' 
            title='Favóritos' 
            repos={starred}	
        />}
                    
    </div>
);

Repos.propTypes	= {
    userInfo: PropTypes.object.isRequired,  
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent;