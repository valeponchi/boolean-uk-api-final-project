import WinnersTable from "./winnersTable"

function addWinners(number) {
  console.log("POP UP MODAL")
}

function deleteSport(number) {
  console.log("Deleted category")
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
  return (
    <li className="sport-card">
      <h3>High Jump</h3>
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
}
