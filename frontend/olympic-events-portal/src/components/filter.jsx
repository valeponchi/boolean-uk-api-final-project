import { useEffect, useState } from 'react'
import useStore from '../store'

export default function Filter() {
	const olympicLocations = useStore(store => store.olympicLocations)
	const fetchOlympicLocations = useStore(store => store.fetchOlympicLocations)

	const olympicSports = useStore(store => store.olympicSports)
	const fetchOlympicSports = useStore(store => store.fetchOlympicSports)

	const olympicCategories = useStore(store => store.olympicCategories)
	const fetchOlympicCategories = useStore(store => store.fetchOlympicCategories)

	useEffect(() => {
		fetchOlympicLocations()
		console.log('I am fetching the locations now..')

		// fetchOlympicCountries()
		// console.log('I am fetching the countries now..')

		fetchOlympicSports()
		console.log('I am fetching the sports now..')

		fetchOlympicCategories()
		console.log('I am fetching the categories now..')
	}, [])

	const [selectedOptionsForm, setSelectedOptionsForm] = useState({
		location: null,
		sports: null,
		category: null,
	})

	function handleChange(e) {
		console.log(e.target.value)
		setSelectedOptionsForm({
			...selectedOptionsForm,
			[e.target.name]: e.target.value,
		})
	}

	let dataOfResult = {}
	function handleSubmit(event) {
		event.preventDefault()
		const { location, sports, category } = selectedOptionsForm
		// build the fetch
		fetch(
			`http://localhost:4000/results/search?location=${location}&sports=${sports}&category=${category}`
		)
			.then(resp => {
				resp.json()
			})
			.then(data => console.log(data))
	}

	return (
		<form className="filters" onSubmit={handleSubmit}>
			{/* LOCATIONS  */}
			<select
				className="filter-select"
				type="select"
				name="location"
				onChange={handleChange}
				value={selectedOptionsForm.location}>
				<option value="null">Olympics Location</option>
				{olympicLocations.map(item => (
					<option key={item.id} value={item.name}>
						{item.title}
					</option>
				))}
			</select>
			{/* SPORTS  */}
			<select
				className="filter-select"
				type="select"
				name="sports"
				onChange={handleChange}
				value={selectedOptionsForm.sports}>
				<option value="null">Sport</option>
				{olympicSports.map(item => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
				))}
			</select>
			{/* CATEGORIES  */}
			<select
				className="filter-select"
				type="select"
				name="category"
				onChange={handleChange}
				value={selectedOptionsForm.category}>
				<option value="null">Category</option>
				{olympicCategories.map(item => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
				))}
			</select>

			<input className="btn" type="submit" value="Search" />
		</form>
	)
}
