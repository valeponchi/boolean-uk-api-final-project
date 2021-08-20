import AddAthlete from "../components/addAthlete"
import { useEffect, useState } from "react"
import useStore from "../store"

export default function AddSportPage() {
  const olympicLocations = useStore(store => store.olympicLocations)
  const fetchOlympicLocations = useStore(store => store.fetchOlympicLocations)

  const olympicCategories = useStore(store => store.olympicCategories)
  const fetchOlympicCategories = useStore(store => store.fetchOlympicCategories)

  const olympicSports = useStore(store => store.olympicSports)
  const fetchOlympicSports = useStore(store => store.fetchOlympicSports)

  const olympicCountries = useStore(store => store.olympicCountries)
  const fetchOlympicCountries = useStore(store => store.fetchOlympicCountries)

  const fetchAddFormData = useStore(store => store.fetchAddFormData)

  const sportsByLocation = useStore(store => store.sportsByLocation)
  const fetchSportsByLocation = useStore(store => store.fetchSportsByLocation)

  const categoriesBysport = useStore(store => store.categoriesBysport)
  const fetchCategoriesBySport = useStore(store => store.fetchCategoriesBySport)

  useEffect(() => {
    fetchOlympicLocations()
    fetchOlympicCategories()
    fetchOlympicSports()
    fetchOlympicCountries()
  }, [])

  const initialAthlete = {
    firstName: "",
    lastName: "",
    countryId: "",
    sex: "",
  }
  const initialAthletesStateArray = new Array(6).fill(initialAthlete)
  const [athletes, setAthletes] = useState(initialAthletesStateArray)

  function onChangeSingleAthlete(e, i) {
    e.stopPropagation()
    const { name, value } = e.target
    const newAthletes = athletes.map((athlete, iOfArray) => {
      if (i === iOfArray) {
        return { ...athlete, [name]: value }
      } else {
        return athlete
      }
    })
    setAthletes(newAthletes)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      categoryId: e.target.category.value,
      athletes: athletes,
    }
    fetchAddFormData(data)
    e.target.reset()
    setAthletes(initialAthletesStateArray)
  }

  function handleLocationChange(e) {
    e.preventDefault()
    const locationId = e.target.value
    console.log("locationId", locationId)
    fetchSportsByLocation(locationId)
  }

  function handleSportChange(e) {
    e.preventDefault()
    const sportId = e.target.value
    console.log("sportId", sportId)
    fetchCategoriesBySport(sportId)
  }

  return (
    <>
      <h3>Select Sport</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <select
          onChange={e => handleLocationChange(e)}
          className="filter-select"
          type="select"
          name="location"
          required
        >
          <option key={0} value={null}>
            Location
          </option>
          {olympicLocations.map(location => {
            return (
              <option key={location.id} value={location.id}>
                {location.title}
              </option>
            )
          })}
        </select>
        <select
          onChange={() => handleSportChange}
          className="filter-select"
          type="select"
          name="sport"
          required
        >
          <option key={0} value={null}>
            Sport
          </option>
          {sportsByLocation.map(sport => {
            {
              /* {olympicSports.map(sport => { */
            }
            return (
              <option key={sport.id} value={sport.id}>
                {sport.name}
              </option>
            )
          })}
        </select>
        <select
          className="filter-select"
          type="select"
          name="category"
          required
        >
          <option key={0} value={null}>
            Category
          </option>
          {/* {categoriesBysport.map(category => { */}
          {olympicCategories.map(category => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            )
          })}
        </select>

        <ul>
          <h3>Add Athletes</h3>
          {athletes.map((athlete, i) => {
            return (
              <AddAthlete
                key={i}
                athlete={athlete}
                athletes={athletes}
                onChangeSingleAthlete={onChangeSingleAthlete}
                olympicCountries={olympicCountries}
                athleteIndex={i}
              />
            )
          })}
        </ul>
        <input className="btn" type="submit" value="Add" />
      </form>
    </>
  )
}
