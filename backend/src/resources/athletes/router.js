const athleteRouter = require('express').Router()

const {
	getAllAthletes,
	getOneAthlete,
	createOneAthlete,
	// deleteAthlete,
} = require('./controller')

athleteRouter.get('/', getAllAthletes)
athleteRouter.get('/:id', getOneAthlete)
athleteRouter.post('/', createOneAthlete)
// athleteRouter.delete('/:id', deleteAthlete)

module.exports = athleteRouter
