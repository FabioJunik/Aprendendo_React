import React from "react";
import  PropTypes from "prop-types";

const UserInfo = ({userInfo})=>(
    <div className = 'user-info'>
			<img src={userInfo.photo}/> 
			
			<div className='basic-info'>
				<h1 className='username'>
					<a href = {`https://github.com/${userInfo.login}`}>Fábio Junik</a>
				</h1>

				<ul className='repos-info'>
					<li>Repositórios: {userInfo.repos}</li>
					<li>Seguidores: {userInfo.followers}</li>
					<li>Seguindo: {userInfo.following}</li>	
				</ul>
			</div>
		</div> 
);

UserInfo.propTypes	= {
	userInfo :  PropTypes.shape({
		name: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired, 
		login : PropTypes.string.isRequired, 
		repos: PropTypes .number.isRequired,
		followers: PropTypes.number .isRequired,
		following: PropTypes. number.isRequired
	})
}

export default UserInfo;