import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundries from '../components/ErrorBoundries'
import './App.css';

function App () {
	
	const [robots, setRobots] = useState([])
	const [searchfield, setSearchfield] = useState('')

	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => {setRobots(users)});
	},[])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
		//console.log(filteredRobots);
	}
		
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		
		return !robots.length ?
		<h1 className = 'tc'>Loading...</h1> : 
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
				<ErrorBoundries>
					<CardList robots={filteredRobots} />
				</ErrorBoundries>	
				</Scroll>
			</div>
		);
		
    }

export default App;