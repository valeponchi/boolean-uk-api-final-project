const sportsRouter = require('express').Router()

const {
	deleteSport,
	getAllSports,
	getOneSport,
	createOneSport,
} = require('./controller')

sportsRouter.get('/', getAllSports)
sportsRouter.get('/:id', getOneSport)
sportsRouter.post('/', createOneSport)
sportsRouter.delete('/:id', deleteSport)

module.exports = sportsRouter
