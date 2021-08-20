import useStore from '../store'

export default function WinnersTable() {
	const resultToShow = useStore(store => store.resultToShow)
	const goldAthlete = resultToShow[0].goldAthlete
	const silverAthlete = resultToShow[0].silverAthlete
	const bronzeAthlete = resultToShow[0].bronzeAthlete

	return (
		<>
			<li className="table-heads">
				<span> </span>
				<span>Country</span>
				<span>Athlete</span>
				<span>Medal</span>
			</li>
			<li className="table-li">
				<img
					src={`https://www.countryflags.io/${goldAthlete.country.code}/flat/64.png`}
					className="flag-icon"
					alt="#"
				/>
				<span>{goldAthlete.country.name}</span>
				<span>{goldAthlete.firstName + ' ' + goldAthlete.lastName}</span>
				<span>Gold</span>
			</li>
			<li className="table-li">
				<img
					src={`https://www.countryflags.io/${silverAthlete.country.code}/flat/64.png`}
					className="flag-icon"
					alt="#"
				/>
				<span>{silverAthlete.country.name}</span>
				<span>{silverAthlete.firstName + ' ' + silverAthlete.lastName}</span>
				<span>Silver</span>
			</li>
			<li className="table-li">
				<img
					src={`https://www.countryflags.io/${bronzeAthlete.country.code}/flat/64.png`}
					className="flag-icon"
					alt="#"
				/>
				<span>{bronzeAthlete.country.name}</span>
				<span>{bronzeAthlete.firstName + ' ' + bronzeAthlete.lastName}</span>
				<span>Bronze</span>
			</li>
		</>
	)
}
