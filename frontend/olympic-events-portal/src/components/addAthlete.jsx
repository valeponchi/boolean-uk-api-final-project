import { useState } from "react"

export default function AddAthlete({ athletes, setAthletes }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [country, setCountry] = useState("")

  function onClick(e) {
    e.preventDefault()
    setAthletes([
      ...athletes,
      { firstName: firstName, lastName: lastName, country: country },
    ])
    console.log("athletes", athletes)
  }

  return (
    <li className="add-athlete">
      <select
        onChange={e => setCountry(e.target.value)}
        className="filter-select"
        type="select"
        name="country"
      >
        <option value="null">Country</option>
        <option value="italy">Italy</option>
        <option value="uk">UK</option>
      </select>
      <input
        onChange={e => setFirstName(e.target.value)}
        type="text"
        name="firstName"
        placeholder="First Name"
        maxLength={30}
      />
      <input
        onChange={e => setLastName(e.target.value)}
        type="text"
        name="lastName"
        placeholder="Last Name"
        maxLength={30}
      />
      <button className="okBtn" onClick={onClick}>
        <p> ☑️ Submit athlete.</p>
      </button>
    </li>
  )
}
