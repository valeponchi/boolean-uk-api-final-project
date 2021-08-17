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

module.exports = categoryRouter
