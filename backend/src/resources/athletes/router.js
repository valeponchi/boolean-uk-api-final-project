const athleteRouter = require("express").Router()

const {
  // getAllAthletes,
  // getOneAthlete,
  createOneAthlete,
  // deleteAthlete,
  createMultiAthletes,
} = require("./controller")

// athleteRouter.get('/', getAllAthletes)
// athleteRouter.get('/:id', getOneAthlete)
athleteRouter.post("/", createOneAthlete)
athleteRouter.post("/new/athletes", createMultiAthletes)
// athleteRouter.delete('/:id', deleteAthlete)

module.exports = athleteRouter
