import AddAthlete from "../components/addAthlete"
import { useState } from "react"

export default function AddSportPage() {
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [country, setCountry] = useState("")
  const [athletes, setAthletes] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      sport: e.target.sport.value,
      category: e.target.category.value,
      athlete: athletes,
    }

    console.log("add sport data:", data)
    addSport(data)
    e.target.reset()
  }

  function addSport(sport) {
    fetch("http://localhost:4000/sports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sport),
    })
      .then(resp => resp.json())
      .then(resp => console.log("sport added", resp))
      .catch(error => {
        console.error("Error sport not added:", error)
      })
  }

  return (
    <>
      <h2>Add Sport</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <select className="filter-select" type="select" name="sport" required>
          <option value="null">Sport</option>
          <option value="atheltics">Athletics</option>
          <option value="gymnastics">Gymnastics</option>
        </select>
        <select
          className="filter-select"
          type="select"
          name="category"
          required
        >
          <option value="null">Category</option>
          <option value="100m-sprint">100m Sprint</option>
          <option value="relay">Relay</option>
        </select>
        <ul>
          <h3>Add Athletes</h3>
          <AddAthlete athletes={athletes} setAthletes={setAthletes} />
          <AddAthlete athletes={athletes} setAthletes={setAthletes} />
          <AddAthlete athletes={athletes} setAthletes={setAthletes} />
          <AddAthlete athletes={athletes} setAthletes={setAthletes} />
          <AddAthlete athletes={athletes} setAthletes={setAthletes} />
          <AddAthlete athletes={athletes} setAthletes={setAthletes} />
        </ul>
        <input className="btn" type="submit" value="Add" />
      </form>
    </>
  )
}
