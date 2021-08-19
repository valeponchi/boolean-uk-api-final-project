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
    console.log("newAthletes", newAthletes)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      locationId: e.target.location.value,
      sportId: e.target.sport.value,
      categoryId: e.target.category.value,
      athletes: athletes,
    }

    console.log("add sport data:", data)
    fetchAddFormData(data)
    e.target.reset()
  }

  console.log("olympicCategories", olympicCategories)
  console.log("olympicLocations", olympicLocations)
  console.log("olympicSports", olympicSports)
  console.log("olympicCountries", olympicCountries)
  return (
    <>
      <h3>Select Sport</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <select
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
        <select className="filter-select" type="select" name="sport" required>
          <option key={0} value={null}>
            Sport
          </option>
          {olympicSports.map(sport => {
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
