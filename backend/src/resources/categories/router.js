const categoryRouter = require('express').Router()

const {
	createOneCategory,
	getAllCategories,
	getOneCategory,
	deleteCategory,
} = require('./controller')

categoryRouter.post('/', createOneCategory)
categoryRouter.get('/', getAllCategories)
categoryRouter.get('/:id', getOneCategory)
categoryRouter.delete('/:id', deleteCategory)

// TO DO
// get all category of a specific sport:
// include sports where id = (sportId)

module.exports = categoryRouter
