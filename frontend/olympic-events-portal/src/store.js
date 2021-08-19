import create from "zustand"

let basicUrl = "http://localhost:4000"

const useStore = create(set => ({
  // bears: 0,
  // increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 })

  fetchAddFormData: alldata => {
    fetch("http://localhost:4000/athletes/new/athletes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alldata),
    })
      .then(resp => resp.json())
      .then(resp => console.log("athletes added", resp))
      .catch(error => {
        console.error("Error athletes not added:", error)
      })
  },

  olympicLocations: [],
  fetchOlympicLocations: () => {
    fetch(`${basicUrl}/locations`)
      .then(resp => resp.json())
      .then(AllLocations => {
        set({ olympicLocations: AllLocations.data })
        console.log("all locations", AllLocations.data)
      })
  },

  olympicCountries: [],
  fetchOlympicCountries: () => {
    fetch(`${basicUrl}/countries`)
      .then(resp => resp.json())
      .then(AllCountries => {
        set({ olympicCountries: AllCountries.data })
        console.log("AllCountries", AllCountries.data)
      })
  },

  olympicSports: [],
  fetchOlympicSports: () => {
    fetch(`${basicUrl}/sports`)
      .then(resp => resp.json())
      .then(AllSports => {
        set({ olympicSports: AllSports.data })
        console.log("AllSports", AllSports.data)
      })
  },

  olympicCategories: [],
  fetchOlympicCategories: () => {
    fetch(`${basicUrl}/categories`)
      .then(resp => resp.json())
      .then(AllCategories => {
        set({ olympicCategories: AllCategories.data })
        console.log("AllCategories", AllCategories.data)
      })
  },

  olympicAthletes: [],
  fetchOlympicAthletes: () => {
    fetch(`${basicUrl}/athletes`)
      .then(resp => resp.json())
      .then(AllAthletes => {
        set({ olympicAthletes: AllAthletes.data })
        console.log("AllAthletes", AllAthletes.data)
      })
  },

  olympicResults: [],
  fetchOlympicResults: () => {
    fetch(`${basicUrl}/results`)
      .then(resp => resp.json())
      .then(AllResults => {
        set({ olympicResults: AllResults })
      })
  },
}))

export default useStore
