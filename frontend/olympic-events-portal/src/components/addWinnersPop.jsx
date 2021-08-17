export default function AddWinnersPop() {
  function handleSubmit(event) {
    event.preventDefault()
    const winners = {
      bronze: event.target.athleteBronze.value,
      silver: event.target.athleteSilver.value,
      gold: event.target.athleteGold.value,
    }
    fetch(`http://localhost:4000/category/1`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(winners),
    })
      .then(resp => resp.json())
      .then(resp => console.log("winners added", resp))
      .catch(error => {
        console.error("Add winners Error:", error)
      })
  }
  return (
    <div className="blackout">
      <div className="popup">
        <h2>Add Winners</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Bronze
            <select
              className="filter-select"
              type="select"
              name="athleteBronze"
            >
              <option value="null">Athlete</option>
              <option value="vale">Vale</option>
              <option value="millie">Millie</option>
            </select>
          </label>
          <label>
            Silver
            <select
              className="filter-select"
              type="select"
              name="athleteSilver"
            >
              <option value="null">Athlete</option>
              <option value="vale">Vale</option>
              <option value="millie">Millie</option>
            </select>
          </label>
          <label>
            Gold
            <select className="filter-select" type="select" name="athleteGold">
              <option value="null">Athlete</option>
              <option value="vale">Vale</option>
              <option value="millie">Millie</option>
            </select>
          </label>
          <input className="btn" type="submit" value="Confirm" />
        </form>
      </div>
    </div>
  )
}
