const countriesRouter = require('express').Router()

const {
	getOneCountry,
	getAllCountries,
	createOneCountry,
} = require('./controller')

countriesRouter.get('/', getAllCountries)
countriesRouter.get('/:id', getOneCountry)

countriesRouter.post('/', createOneCountry)

module.exports = countriesRouter
