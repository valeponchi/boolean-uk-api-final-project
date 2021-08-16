const sportsRouter = require('express').Router()

const { getAllSports, getOneSport, createOneSport } = require('./controller')

sportsRouter.get('/', getAllSports)
sportsRouter.get('/:id', getOneSport)
sportsRouter.post('/', createOneSport)

module.exports = sportsRouter
