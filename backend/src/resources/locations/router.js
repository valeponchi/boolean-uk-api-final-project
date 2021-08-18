const locationRouter = require('express').Router()

const {
	getAllLocations,
	createOneLocation,
	getOneLocation,
	deleteLocation,
	updateALocation,
} = require('./controller')

locationRouter.get('/', getAllLocations)
locationRouter.get('/:id', getOneLocation)

locationRouter.post('/', createOneLocation)
locationRouter.delete('/:id', deleteLocation)
locationRouter.patch('/id', updateALocation)

module.exports = locationRouter
