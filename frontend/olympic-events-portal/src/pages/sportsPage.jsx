import SportCard from '../components/sportCard'
import Filter from '../components/filter'
export default function SportsPage() {
	return (
		<>
			<Filter />
			<ul>
				<SportCard />
			</ul>
		</>
	)
}
