const { category } = require("../../utils/dbClient")

async function createOneCategory(req, res) {
  const { name, sportId } = req.body
  const newCategory = {
    name,
  }
  const createdCategory = await category.create({
    data: {
      ...newCategory,
      sport: { connect: { id: parseInt(sportId) } },
    },
  })
  res.json({ data: createdCategory })
}

const getAllCategories = async (req, res) => {
  const allCategories = await category.findMany()
  res.json({ data: allCategories })
}

const getOneCategory = async (req, res) => {
  const { id } = req.params

  const oneCategory = await category.findUnique({
    where: { id: parseInt(id) },
  })
  res.json({ data: oneCategory })
}

const getCategoriesBySport = async (req, res) => {
  const { id } = req.params
  console.log("req.params id", id)
  const allCategories = await category.findMany({
    //  where: { locationId: parseInt(id) } },
    //  where: { location: { connect: { id: parseInt(id) } } },
    //  where: { locationId: { is: parseInt(id) } },
  })
  res.json({ data: allCategories })
}

const deleteCategory = async (req, res) => {
  const id = parseInt(req.params.id)

  const deletedCategory = await category.delete({
    where: { id },
  })
  res.json({ data: deletedCategory })
}

module.exports = {
  createOneCategory,
  getAllCategories,
  getOneCategory,
  deleteCategory,
  getCategoriesBySport,
}
