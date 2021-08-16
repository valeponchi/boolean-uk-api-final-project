const locationRouter = require('express').Router()

const {
	getAllLocations,
	createOneLocation,
	getOneLocation,
} = require('./controller')

locationRouter.get('/', getAllLocations)
locationRouter.get('/:id', getOneLocation)

locationRouter.post('/', createOneLocation)

module.exports = locationRouter
