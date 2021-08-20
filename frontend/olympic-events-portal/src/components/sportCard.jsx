import { useEffect, useState } from 'react'
import useStore from '../store'
import WinnersTable from './winnersTable'

function addWinners(number) {
	console.log('POP UP MODAL')
}

function deleteSport(number) {
	console.log('Deleted category')
	// fetch(`http://localhost:4000/category/1`, {
	//   method: "DELETE",
	// })
	//   .then(resp => resp.json())
	//   .then(resp => console.log("category deleted", resp))
	//   .catch(error => {
	//     console.error("Delete category Error:", error)
	//   })
}

export default function SportCard() {
	const resultToShow = useStore(store => store.resultToShow)
	if (resultToShow.length > 0) {
		const category = resultToShow[0].category

		return (
			<li className="sport-card">
				{/* {resultToShow.category.name} */}
				<h3>{category.name}</h3>
				<ul className="table">
					<WinnersTable />
				</ul>
				<div className="cardNav">
					<div onClick={() => deleteSport(1)} className="btn">
						Delete
					</div>
					<div onClick={() => addWinners(1)} className="btn">
						Add Winners
					</div>
				</div>
			</li>
		)
	} else {
		return <h3>Select the result you want to see..</h3>
	}
}
