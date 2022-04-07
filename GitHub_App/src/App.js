import './App.css';
import React, { Component } from 'react';
import ajax from "@fdaciuk/ajax";
import AppContent from './components/AppContent/appContent';

class App extends Component{
	constructor(){
		super();
		this.state={
			userInfo:null,
			repos:[],
			starred:[]
		}
		
	}

	handleSearch(e){
		const ENTER = e.keyCode === 13;
		const value = e.target.value;

		if(ENTER){
			ajax().get(`https://api.github.com/users/${value}`)
			.then((result)=>{
				this.setState({
					userInfo:{
						name: result.name,
						photo: result.avatar_url,
						login: result.login,
						repos: result.public_repos,
						followers: result.followers,
						following: result.following
					}
				})
			})
		}
		console.log(ENTER)
	
	}

	render(){
		return <AppContent 
				userInfo={this.state.userInfo}
				repos={this.state.repos}
				starred={this.state.starred}
				handleSearch={(e)=>this.handleSearch(e)}/>
	}
  
}

export default App;
