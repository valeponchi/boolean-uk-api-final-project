export default function Filter() {
  function handleSubmit(event) {
    event.preventDefault()
    const data = {
      sport: event.target.sport.value,
      category: event.target.category.value,
      country: event.target.country.value,
      athlete: event.target.athlete.value,
      medal: event.target.medal.value,
    }
    console.log("filter data:", data)
  }

  return (
    <form className="filters" onSubmit={handleSubmit}>
      <select className="filter-select" type="select" name="sport">
        <option value="null">Sport</option>
        <option value="atheltics">Athletics</option>
        <option value="gymnastics">Gymnastics</option>
      </select>
      <select className="filter-select" type="select" name="category">
        <option value="null">Category</option>
        <option value="100m-sprint">100m Sprint</option>
        <option value="relay">Relay</option>
      </select>
      <select className="filter-select" type="select" name="country">
        <option value="null">Country</option>
        <option value="italy">Italy</option>
        <option value="uk">UK</option>
      </select>
      <select className="filter-select" type="select" name="athlete">
        <option value="null">Athlete</option>
        <option value="vale">Vale</option>
        <option value="millie">Millie</option>
      </select>
      <select className="filter-select" type="select" name="medal">
        <option value="null">Medal</option>
        <option value="gold">Gold</option>
        <option value="silver">Silver</option>
        <option value="bronze">Bronze</option>
      </select>
      <input className="btn" type="submit" value="Filter" />
    </form>
  )
}
