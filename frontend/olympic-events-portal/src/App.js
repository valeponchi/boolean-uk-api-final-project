import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Nav from './components/nav'
import SportsPage from './pages/sportsPage'
import AddSportPage from './pages/addSportPage'
import logo from './images/logo/logo.png'
function App() {
	useEffect(() => {
		fetch('http://localhost:4000/locations')
			.then(resp => resp.json())
			.then(resp => console.log('all locations', resp))
	}, [])

	useEffect(() => {
		fetch('http://localhost:4000/locations/1')
			.then(resp => resp.json())
			.then(resp => console.log('locations id 1', resp))
	}, [])

	useEffect(() => {
		const location = {
			title: 'Madrid 2030',
			date: '4 Feb 2028 – 20 Feb 2028',
		}
		fetch('http://localhost:4000/locations', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(location),
		})
			.then(resp => resp.json())
			.then(resp => console.log('location added', resp))
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	useEffect(() => {
		fetch('http://localhost:4000/sports')
			.then(resp => resp.json())
			.then(resp => console.log('all sports', resp))
	}, [])

	useEffect(() => {
		fetch('http://localhost:4000/sports/1')
			.then(resp => resp.json())
			.then(resp => console.log('sport id 1', resp))
	}, [])

	useEffect(() => {
		const sport = {
			name: 'Table tennis',
			locationId: 1,
		}
		fetch('http://localhost:4000/sports', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(sport),
		})
			.then(resp => resp.json())
			.then(resp => console.log('sport added', resp))
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	return (
		<div className="App">
			<header>
				<img src={logo} alt="flag" className="logo" />
				{/* change alt to country name */}
				<h1>Olympic Events Portal</h1>
			</header>
			<div className="portal">
				<Route path="/">
					<Nav />
				</Route>
				<Switch>
					<Route path="/" exact>
						<SportsPage />
					</Route>
					<Route path="/add-sport" exact>
						<AddSportPage />
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default App
