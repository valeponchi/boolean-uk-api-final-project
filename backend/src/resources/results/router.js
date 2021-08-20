const resultsRouter = require('express').Router()

const {
	getAllResults,
	getOneResult,
	createOneResult,
	deleteResult,
	searchingResult,
} = require('./controller')

resultsRouter.get('/', getAllResults)
resultsRouter.get('/search', searchingResult)
resultsRouter.get('/:id', getOneResult)
// resultsRouter.post('/', createOneResult)
resultsRouter.delete('/:id', deleteResult)

module.exports = resultsRouter
