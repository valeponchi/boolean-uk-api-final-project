export default function AddAthlete({
  athlete,
  onChangeSingleAthlete,
  olympicCountries,
  athleteIndex,
}) {
  return (
    <li className="add-athlete">
      <select
        onChange={e => onChangeSingleAthlete(e, athleteIndex)}
        className="filter-select"
        type="select"
        name="countryId"
        value={athlete.countryId}
      >
        <option key={0} value={null}>
          Country
        </option>
        {olympicCountries.map(country => {
          return (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          )
        })}
      </select>
      <input
        onChange={e => onChangeSingleAthlete(e, athleteIndex)}
        type="text"
        name="firstName"
        placeholder="First Name"
        maxLength={30}
        value={athlete.firstName}
      />
      <input
        onChange={e => onChangeSingleAthlete(e, athleteIndex)}
        type="text"
        name="lastName"
        placeholder="Last Name"
        maxLength={30}
        value={athlete.lastName}
      />
      <select
        onChange={e => onChangeSingleAthlete(e, athleteIndex)}
        className="filter-select"
        type="select"
        name="sex"
        value={athlete.sex}
      >
        <option key={0} value={null}>
          Sex
        </option>
        <option key={1} value={"F"}>
          Female
        </option>
        <option key={2} value={"M"}>
          Male
        </option>
      </select>
    </li>
  )
}
