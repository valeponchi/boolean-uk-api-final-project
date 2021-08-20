const sportsRouter = require("express").Router()

const {
  deleteSport,
  getAllSports,
  getOneSport,
  getSportsByLocation,
  createOneSport,
} = require("./controller")

sportsRouter.get("/", getAllSports)
sportsRouter.get("/:id", getOneSport)
sportsRouter.get("/location/:id", getSportsByLocation)
sportsRouter.post("/", createOneSport)
sportsRouter.delete("/:id", deleteSport)

// TO DO
// get all sports of one olympic-location:
// include location where id = 1 (or 2)

module.exports = sportsRouter
